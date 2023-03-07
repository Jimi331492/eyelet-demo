import Button from './Button.mjs';
Button.install = function (app) {
  app.component(Button.name, Button);
};
export var _ButtonComponent = Button;
export default Button;