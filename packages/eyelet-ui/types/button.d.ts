import { BasicComponent } from './basicComponent';

export type size = 'large' | 'small' | 'default';
export interface ButtonProps {
	color?: string;
	size?: size;
	onClick?: (e: Event) => void;
}

export class Button extends BasicComponent {
	$props: ButtonProps;
}

export class _ButtonComponent extends Button {}
