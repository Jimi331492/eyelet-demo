import ZmStyleProvider from './StyleProvider.vue';
import { formatStyleVars } from '../utils/elements';
import type { App } from 'vue';

export type StyleVars = Record<string, string>;

const mountedVarKeys: string[] = [];

function StyleProvider(styleVars: StyleVars | null) {
	mountedVarKeys.forEach(key => document.documentElement.style.removeProperty(key));
	mountedVarKeys.length = 0;

	const styles: StyleVars = formatStyleVars(styleVars ?? {});
	Object.entries(styles).forEach(([key, value]) => {
		document.documentElement.style.setProperty(key, value);
		mountedVarKeys.push(key);
	});
}

StyleProvider.Component = ZmStyleProvider;

ZmStyleProvider.install = function (app: App) {
	app.component(ZmStyleProvider.name, ZmStyleProvider);
};

StyleProvider.install = function (app: App) {
	app.component(ZmStyleProvider.name, ZmStyleProvider);
};

export { props as styleProviderProps } from './props';

export const _StyleProviderComponent = ZmStyleProvider;

export default StyleProvider;
