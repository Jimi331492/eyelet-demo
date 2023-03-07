import { defineComponent, PropType } from 'vue';
import './button.less';

export default defineComponent({
	name: 'ZmButton',
	props: {
		// eslint-disable-next-line vue/require-default-prop
		color: {
			type: String,
		},
		// eslint-disable-next-line vue/require-default-prop
		onClick: {
			// eslint-disable-next-line no-unused-vars
			type: Function as PropType<(e: Event) => void>,
		},
	},
	setup(props, { slots }) {
		const handleClick = (e: Event) => props.onClick?.(e);

		return () => {
			const { color } = props;

			return (
				<button class="zm-button" style={{ background: color }} onClick={handleClick}>
					{slots.default?.()}
				</button>
			);
		};
	},
});
