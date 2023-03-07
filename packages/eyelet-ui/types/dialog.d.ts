import { BasicComponent } from './basicComponent';
import { type PropType } from 'vue';

type listenerPropReturn<F> = {
	type: PropType<F | F[]>;
	default: unknown;
};

export type modeType = 'center' | 'bottom';

export interface DialogProps {
	mode: modeType;
	className?: string;
	visible: boolean;
	mask?: boolean;
	maskClosable?: boolean;
	closable?: boolean;
	noPadding?: boolean;
	onClose: listenerPropReturn<(active: string | number) => void>;
}

export class Dialog extends BasicComponent {
	$props: DialogProps;

	$slots: {
		default(): VNode[];
	};
}

export class _DialogComponent extends Dialog {}
