import {
	ZmComponent,
	BasicAttributes,
	ListenerProp,
	type Size as LoadingSize,
} from './zmComponent';
import { App, TeleportProps, VNode } from 'vue';

export type ToastPosition = 'top' | 'center' | 'bottom';

export type ToastType = 'success' | 'warning' | 'info' | 'error' | 'loading';

export type LoadingType = 'circle' | 'wave' | 'cube' | 'rect' | 'disappear'

export declare const toastProps: Record<string, any>;

export interface ToastProps extends BasicAttributes {
	type?: ToastType;
	content?: string;
	position?: ToastPosition;
	loadingType?: LoadingType;
	loadingSize?: LoadingSize;
	loadingColor?: string;
	loadingRadius?: string | number;
	teleport?: TeleportProps['to'];
	lockScroll?: boolean;
	contentClass?: string;
	duration?: number;
	vertical?: boolean;
	show?: boolean;
	forbidClick?: boolean;
	onOpen?: ListenerProp<() => void>;
	onClose?: ListenerProp<() => void>;
	onOpened?: ListenerProp<() => void>;
	onClosed?: ListenerProp<() => void>;
	'onUpdate:show'?: ListenerProp<(show: boolean) => void>;
}

export class ToastComponent extends ZmComponent {
	$props: ToastProps;

	$slots: {
		default(): VNode[];
		action(): VNode[];
	};
}

export interface ToastHandel {
	clear: () => void;
}

export interface ToastOptions {
	type?: ToastType;
	content?: string;
	position?: ToastPosition;
	loadingType?: string;
	loadingSize?: string;
	teleport?: string;
	lockScroll?: boolean;
	contentClass?: string;
	duration?: number;
	vertical?: boolean;
	forbidClick?: boolean;
	onOpen?: () => void;
	onClose?: () => void;
	onOpened?: () => void;
	onClosed?: () => void;
}

export interface IToast {
	(options?: ToastOptions | string): ToastHandel;

	Component: typeof ToastComponent;

	install(app: App): void;

	allowMultiple(bool: boolean): void;

	success(options: ToastOptions | string): ToastHandel;

	warning(options: ToastOptions | string): ToastHandel;

	info(options: ToastOptions | string): ToastHandel;

	error(options: ToastOptions | string): ToastHandel;

	loading(options: ToastOptions | string): ToastHandel;

	setDefaultOptions(options: ToastOptions): void;

	resetDefaultOptions(): void;

	clear(): void;
}

export declare const Toast: IToast;

export class _ToastComponent extends ToastComponent {}
