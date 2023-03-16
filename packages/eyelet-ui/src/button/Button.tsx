import { defineComponent } from 'vue';
import { createNamespace } from '../utils/components';
import { props } from './props';
import './button.less';

const { n, classes } = createNamespace('button');

export default defineComponent({
	name: 'ZmButton',
	props,
	setup(props, { slots }) {
		const handleClick = (e: Event) => props.onClick?.(e);

		return () => {
			const { color, size, block } = props;

			return (
				<button
					class={classes(n(), n(`--${size}`), [
						block,
						`${n('$--flex')} ${n('--block')}`,
						n('$--inline-flex'),
					])}
					style={{ background: color }}
					onClick={handleClick}
				>
					{slots.default?.()}
				</button>
			);
		};
	},
});
