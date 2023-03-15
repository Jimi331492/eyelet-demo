import { defineListenerProp, pickProps } from '../utils/components';
import { props as iconProps } from '../icon/props';
import { TOAST_TYPE, ToastType } from './index';
import type { PropType, TeleportProps } from 'vue';

export function positionValidator(position: string): boolean {
	const validPositions = ['top', 'center', 'bottom'];
	return validPositions.includes(position);
}

export function typeValidator(type: ToastType): boolean {
	return TOAST_TYPE.includes(type);
}

export const props = {
	type: {
		type: String as PropType<ToastType>,
		validator: typeValidator,
	},
	// toast显示的位置
	position: {
		type: String,
		default: 'bottom',
		validator: positionValidator,
	},
	// content内容
	content: {
		type: String,
	},
	// 为toast content添加自定义类名
	contentClass: {
		type: String,
	},
	// toast 持续时间
	duration: {
		type: Number,
		default: 3000,
	},
	// 是否将消息条内容堆叠在操作（按钮）之上
	vertical: {
		type: Boolean,
		default: false,
	},
	loadingName: {
		...pickProps(iconProps, 'name'),
		default: 'https://canyan.kp-static.com/mini/top-loading.gif',
	},
	loadingSize: {
		...pickProps(iconProps, 'size'),
		default: 40,
	},
	loadingColor: {
		...pickProps(iconProps, 'color'),
		default: 'currentColor',
	},
	// 是否禁止滚动穿透
	lockScroll: {
		type: Boolean,
		default: false,
	},
	// 控制组件可见还是隐藏
	show: {
		type: Boolean,
		default: false,
	},
	// teleport
	teleport: {
		type: String as PropType<TeleportProps['to']>,
		default: 'body',
	},
	// 是否禁止点击背景
	forbidClick: {
		type: Boolean,
		default: false,
	},
	// 打开时的回调函数
	onOpen: defineListenerProp<() => void>(),
	// 打开动画结束时的回调
	onOpened: defineListenerProp<() => void>(),
	// 关闭时的回调函数
	onClose: defineListenerProp<() => void>(),
	// 关闭动画结束时的回调
	onClosed: defineListenerProp<() => void>(),
	'onUpdate:show': defineListenerProp<(show: boolean) => void>(),
	_update: {
		type: String,
	},
};
