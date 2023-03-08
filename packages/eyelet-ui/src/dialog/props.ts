import { defineListenerProp } from '../utils/components';
import type { PropType } from 'vue';

function modeValidator(mode: string): boolean {
	return ['center', 'bottom'].includes(mode);
}

export const props = {
	mode: {
		type: String as PropType<'center' | 'bottom'>,
		require: true,
		default: 'center',
		validator: modeValidator,
	},
	className: { type: String, default: '' },
	visible: { type: Boolean, require: true, default: false },
	mask: { type: Boolean, default: true }, // 是否展示遮罩
	maskClosable: { type: Boolean, default: true }, // 点击遮罩是否能关闭
	closable: { type: Boolean, default: false }, // 是否展示关闭按钮
	noPadding: { type: Boolean, default: false },
	onClose: defineListenerProp<(active: string | number) => void>(),
};
