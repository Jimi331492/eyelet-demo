import { defineListenerProp } from '../utils/components';

export const props = {
	name: {
		type: String,
	},
	size: {
		type: Number,
	},
	color: {
		type: String,
	},
	namespace: {
		type: String,
		default: 'zm-icon',
	},
	transition: {
		type: [Number, String],
		default: 0,
	},
	onClick: defineListenerProp<(event: Event) => void>(),
};
