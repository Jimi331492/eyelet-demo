import { StyleVars } from '../../style-provider';
import button from './button';
import dialog from './dialog';
import appBar from './appBar';

export default {
	// common
	// '--color-body': '#1e1e1e',
	// '--color-text': '#fff',
	// '--color-primary': '#4a7afe',
	// '--color-info': '#10afef',
	// '--color-success': '#10c48f',
	// '--color-warning': '#ff8800',
	// '--color-danger': '#ef5350',
	// '--color-disabled': '#404040',
	// '--color-text-disabled': '#757575',
	// component
	...button,
	...dialog,
	...appBar,
} as StyleVars;
