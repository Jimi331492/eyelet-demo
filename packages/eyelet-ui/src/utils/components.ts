import { createApp, type PropType, h, type Ref, onActivated, onDeactivated, ref } from 'vue';
import type { Component } from 'vue';
import { isArray } from '@varlet/shared';

export interface MountInstance {
	instance: any;
	unmount: () => void;
}

export function mount(component: Component): MountInstance {
	const app = createApp(component);
	const host = document.createElement('div');
	document.body.appendChild(host);

	return {
		instance: app.mount(host),
		unmount() {
			app.unmount();
			document.body.removeChild(host);
		},
	};
}

export function mountInstance(
	component: any,
	props: Record<string, any> = {},
	eventListener: Record<string, any> = {},
): {
	unmountInstance: () => void;
} {
	const Host = {
		setup() {
			return () =>
				h(component, {
					...props,
					...eventListener,
				});
		},
	};

	const { unmount } = mount(Host);
	return { unmountInstance: unmount };
}

export function useTeleport() {
	const disabled: Ref<boolean> = ref(false);

	onActivated(() => {
		disabled.value = false;
	});

	onDeactivated(() => {
		disabled.value = true;
	});

	return {
		disabled,
	};
}

export function call<P extends any[], R>(
	fn?: ((...arg: P) => R) | ((...arg: P) => R)[] | null,
	...args: P
): R | R[] | undefined {
	if (isArray(fn)) {
		return fn.map(f => f(...args));
	}

	if (fn) {
		return fn(...args);
	}
}

type listenerPropReturn<F> = {
	type: PropType<F | F[]>;
	default: unknown;
};

export function defineListenerProp<F>(fallback?: unknown): listenerPropReturn<F> {
	return {
		type: [Function, Array] as PropType<F | F[]>,
		default: fallback,
	};
}

type ClassName = string | undefined | null;
type Classes = (ClassName | [any, ClassName, ClassName?])[];

export function createNamespace(name: string) {
	const namespace = `zm`;
	const componentName = `${namespace}-${name}`;

	const createBEM = (suffix?: string): string => {
		if (!suffix) return componentName;

		if (suffix[0] === '$') {
			return suffix.replace('$', namespace);
		}

		return suffix.startsWith('--')
			? `${componentName}${suffix}`
			: `${componentName}__${suffix}`;
	};

	const classes = (...classes: Classes): any[] => {
		return classes.map(className => {
			if (isArray(className)) {
				const [condition, truthy, falsy = null] = className;
				return condition ? truthy : falsy;
			}

			return className;
		});
	};

	return {
		n: createBEM,
		classes,
	};
}

export function pickProps<T, U extends keyof T>(props: T, propsKey: U): T[U];
export function pickProps<T, U extends keyof T>(props: T, propsKey: U[]): Pick<T, U>;
export function pickProps(props: any, propsKey: any): any {
	return Array.isArray(propsKey)
		? propsKey.reduce((pickedProps: any, key) => {
				pickedProps[key] = props[key];
				return pickedProps;
		  }, {})
		: props[propsKey];
}
