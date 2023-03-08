import { type PropType } from 'vue';
import { isArray } from '@varlet/shared';

export function call<P extends any[], R>(
	fn?: ((...arg: P) => R) | ((...arg: P) => R)[] | null,
	...args: P
  ): R | R[] | undefined {
	if (isArray(fn)) {
	  return fn.map((f) => f(...args))
	}
  
	if (fn) {
	  return fn(...args)
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

		return suffix.startsWith('--') ? `${componentName}${suffix}` : `${componentName}__${suffix}`;
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
