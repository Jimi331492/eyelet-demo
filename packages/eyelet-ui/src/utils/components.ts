import { type PropType } from 'vue';

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
