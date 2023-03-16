import type { PropType } from 'vue';

function sizeValidator(size: string): boolean {
	return ['small', 'default', 'large'].includes(size);
}

export const props = {
	color: {
		type: String,
		require: false,
	},
	size: {
		type: String as PropType<'small' | 'default' | 'large'>,
		require: false,
		default: 'default',
		validator: sizeValidator,
	},
	block: {
		type: Boolean,
		require: false,
		default: false,
	},
	onClick: Function as PropType<(e: Event) => void>,
};
