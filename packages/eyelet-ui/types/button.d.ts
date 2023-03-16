import { BasicComponent } from './basicComponent';

export type size = 'large' | 'small' | 'default';
export interface ButtonProps {
	color?: string;
	size?: size;
	block?: boolean;
	onClick?: (e: Event) => void;
}

export class Button extends BasicComponent {
	$props: ButtonProps;
}

export class _ButtonComponent extends Button {}
