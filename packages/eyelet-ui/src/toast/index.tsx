import ZmToastCore from './core.vue';
import ZmToast from './Toast.vue';
import context from '../context';
import type { App, Component, TeleportProps } from 'vue';
import { reactive, TransitionGroup } from 'vue';
import { call, mountInstance } from '../utils/components';
import { isPlainObject, isString, toNumber } from '@varlet/shared';

export type ToastType = 'success' | 'warning' | 'info' | 'error' | 'loading';

export const TOAST_TYPE: Array<ToastType> = ['loading', 'success', 'warning', 'info', 'error'];

interface ToastHandel {
	clear: () => void;
}

interface ToastOptions {
	type?: ToastType;
	content?: string;
	position?: 'top' | 'center' | 'bottom';
	lockScroll?: boolean;
	contentClass?: string;
	duration?: number;
	vertical?: boolean;
	forbidClick?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	onOpened?: () => void;
	onClosed?: () => void;
	// internal
	teleport?: TeleportProps['to'];
	show?: boolean;
}

interface UniqToastOptions {
	id: number;
	reactiveToastOptions: ToastOptions;
	_update?: string;
	animationEnd?: boolean;
}

interface Toast {
	(options?: ToastOptions | string): ToastHandel;

	install(app: App): void;

	allowMultiple(bool: boolean): void;

	success(options: ToastOptions | string): ToastHandel;

	warning(options: ToastOptions | string): ToastHandel;

	info(options: ToastOptions | string): ToastHandel;

	error(options: ToastOptions | string): ToastHandel;

	loading(options: ToastOptions | string): ToastHandel;

	clear(): void;

	setDefaultOptions(options: ToastOptions): void;

	resetDefaultOptions(): void;

	Component: Component;
}

let sid = 0;
let isMount = false;
let unmount: () => void;
let isAllowMultiple = false;
const defaultOptionsValue: ToastOptions = {
	type: undefined,
	content: '',
	position: 'bottom',
	duration: 3000,
	vertical: false,
	contentClass: undefined,
	lockScroll: false,
	teleport: 'body',
	forbidClick: false,
	onOpen: () => {},
	onOpened: () => {},
	onClose: () => {},
	onClosed: () => {},
};
let uniqToastOptions: Array<UniqToastOptions> = reactive<UniqToastOptions[]>([]);

let defaultOptions: ToastOptions = defaultOptionsValue;

const transitionGroupProps: any = {
	name: 'zm-toast-fade',
	tag: 'div',
	class: 'zm-transition-group',
};

const TransitionGroupHost = {
	setup() {
		return () => {
			const toastList = uniqToastOptions.map(
				({ id, reactiveToastOptions, _update }: UniqToastOptions) => {
					const transitionGroupEl = document.querySelector('.zm-transition-group');
					if (
						reactiveToastOptions.forbidClick ||
						reactiveToastOptions.type === 'loading'
					) {
						(transitionGroupEl as HTMLElement).classList.add('zm-pointer-auto');
					} else {
						(transitionGroupEl as HTMLElement).classList.remove('zm-pointer-auto');
					}

					if (isAllowMultiple) reactiveToastOptions.position = 'top';

					const position = isAllowMultiple ? 'relative' : 'absolute'; // avoid stylelint value-keyword-case error

					const style = {
						position,
						...getTop(reactiveToastOptions.position),
					};

					return (
						<ZmToastCore
							{...reactiveToastOptions}
							key={id}
							style={style}
							data-id={id}
							_update={_update}
							v-model={[reactiveToastOptions.show, 'show']}
						/>
					);
				},
			);

			return (
				<TransitionGroup
					{...transitionGroupProps}
					style={{ zIndex: context.zIndex }}
					onAfterEnter={opened}
					onAfterLeave={removeUniqOption}
				>
					{toastList}
				</TransitionGroup>
			);
		};
	},
};

const Toast: Toast = function (options?: ToastOptions | string): ToastHandel {
	const toastOptions: ToastOptions = normalizeOptions(options);
	const reactiveToastOptions: ToastOptions = reactive<ToastOptions>({
		...defaultOptions,
		...toastOptions,
	});
	reactiveToastOptions.show = true;

	if (!isMount) {
		isMount = true;
		unmount = mountInstance(TransitionGroupHost).unmountInstance;
	}

	const { length } = uniqToastOptions;
	const uniqToastOptionItem: UniqToastOptions = {
		id: sid++,
		reactiveToastOptions,
	};

	if (length === 0 || isAllowMultiple) {
		addUniqOption(uniqToastOptionItem);
	} else {
		const _update = `update-${sid}`;
		updateUniqOption(reactiveToastOptions, _update);
	}

	return {
		clear() {
			if (!isAllowMultiple && uniqToastOptions.length) {
				uniqToastOptions[0].reactiveToastOptions.show = false;
			} else {
				reactiveToastOptions.show = false;
			}
		},
	};
} as Toast;

TOAST_TYPE.forEach(type => {
	Toast[type] = (options: ToastOptions | string): ToastHandel => {
		if (isPlainObject(options)) {
			options.type = type;
		} else {
			options = {
				content: options,
				type,
			};
		}
		return Toast(options);
	};
});

Toast.install = function (app: App) {
	app.component(ZmToast.name, ZmToast);
};

Toast.allowMultiple = function (bool = false) {
	if (bool !== isAllowMultiple) {
		uniqToastOptions.forEach((option: UniqToastOptions) => {
			option.reactiveToastOptions.show = false;
		});

		isAllowMultiple = bool;
	}
};

Toast.clear = function () {
	uniqToastOptions.forEach((option: UniqToastOptions) => {
		option.reactiveToastOptions.show = false;
	});
};

Toast.setDefaultOptions = function (options: ToastOptions) {
	defaultOptions = options;
};

Toast.resetDefaultOptions = function () {
	defaultOptions = defaultOptionsValue;
};

Toast.Component = ZmToast;

function opened(element: HTMLElement): void {
	const id = element.getAttribute('data-id');
	const option = uniqToastOptions.find(option => option.id === toNumber(id));
	if (option) {
		call(option.reactiveToastOptions.onOpened);
	}
}

function removeUniqOption(element: HTMLElement): void {
	element.parentElement && element.parentElement.classList.remove('zm-pointer-auto');
	const id = element.getAttribute('data-id');

	const option = uniqToastOptions.find(option => option.id === toNumber(id));
	if (option) {
		option.animationEnd = true;
		call(option.reactiveToastOptions.onClosed);
	}

	const isAllAnimationEnd = uniqToastOptions.every(option => option.animationEnd);

	if (isAllAnimationEnd) {
		call(unmount);
		uniqToastOptions = reactive<UniqToastOptions[]>([]);
		isMount = false;
	}
}

function addUniqOption(uniqToastOptionItem: UniqToastOptions) {
	uniqToastOptions.push(uniqToastOptionItem);
}

function normalizeOptions(options = {}): ToastOptions {
	return isString(options) ? { content: options } : options;
}

function updateUniqOption(reactiveToastOptions: ToastOptions, _update: string) {
	const [firstOption] = uniqToastOptions;

	firstOption.reactiveToastOptions = {
		...firstOption.reactiveToastOptions,
		...reactiveToastOptions,
	};

	firstOption._update = _update;
}

function getTop(position = 'top') {
	if (position === 'bottom') return { [position]: '5%' };

	return { top: position === 'top' ? '5%' : '45%' };
}

ZmToast.install = function (app: App) {
	app.component(ZmToast.name, ZmToast);
};

export { props as toastProps } from './props';

export const _ToastComponent = ZmToast;

export default Toast;
