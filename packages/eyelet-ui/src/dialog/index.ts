// Component entry, the folder where the file exists will be exposed to the user
import Dialog from './Dialog.vue';
import type { App } from 'vue';

Dialog.install = function (app: App) {
	app.component(Dialog.name, Dialog);
};

export const _DialogComponent = Dialog;

export default Dialog;
