import { VarComponent, BasicAttributes, ListenerProp } from './zmComponent';

export declare const iconProps: Record<string, any>;

export interface IconProps extends BasicAttributes {
	name?: string;
	size?: string | number;
	color?: string;
	namespace?: string;
	transition?: string | number;
	onClick?: ListenerProp<(event: Event) => void>;
}

export class Icon extends VarComponent {
	$props: IconProps;
}

export class _IconComponent extends Icon {}