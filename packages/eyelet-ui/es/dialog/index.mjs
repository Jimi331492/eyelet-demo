// Component entry, the folder where the file exists will be exposed to the user
import Dialog from './Dialog.mjs';
Dialog.install = function (app) {
  app.component(Dialog.name, Dialog);
};
export var _DialogComponent = Dialog;
export default Dialog;