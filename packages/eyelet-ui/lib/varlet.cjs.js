"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const Button = vue.defineComponent({
  name: "ZmButton",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    color: {
      type: String
    },
    // eslint-disable-next-line vue/require-default-prop
    onClick: {
      // eslint-disable-next-line no-unused-vars
      type: Function
    }
  },
  setup(props2, _ref) {
    var {
      slots
    } = _ref;
    var handleClick = (e) => props2.onClick == null ? void 0 : props2.onClick(e);
    return () => {
      var {
        color
      } = props2;
      return vue.createVNode("button", {
        "class": "zm-button",
        "style": {
          background: color
        },
        "onClick": handleClick
      }, [slots.default == null ? void 0 : slots.default()]);
    };
  }
});
Button.install = function(app) {
  app.component(Button.name, Button);
};
var _ButtonComponent = Button;
function defineListenerProp(fallback) {
  return {
    type: [Function, Array],
    default: fallback
  };
}
function mdoeValidator(mode) {
  return ["center", "bottom"].includes(mode);
}
var props = {
  mode: {
    type: String,
    require: true,
    default: "center",
    validator: mdoeValidator
  },
  className: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    require: true,
    default: false
  },
  mask: {
    type: Boolean,
    default: true
  },
  // 是否展示遮罩
  maskClosable: {
    type: Boolean,
    default: true
  },
  // 点击遮罩是否能关闭
  closable: {
    type: Boolean,
    default: false
  },
  // 是否展示关闭按钮
  noPadding: {
    type: Boolean,
    default: false
  },
  onClose: defineListenerProp()
};
var _withScopeId = (n) => (vue.pushScopeId(""), n = n(), vue.popScopeId(), n);
var _hoisted_1 = {
  key: 0,
  class: "zm-dialog"
};
var _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode(
  "span",
  {
    class: "icomoon icon-close"
  },
  null,
  -1
  /* HOISTED */
));
var _hoisted_3 = [_hoisted_2];
function __render__(_ctx, _cache) {
  return _ctx._visible ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [_ctx.mask ? (vue.openBlock(), vue.createElementBlock(
    "div",
    {
      key: 0,
      class: vue.normalizeClass(["zm-dialog__mask", {
        remove: _ctx.hideAnimation
      }]),
      onClick: _cache[0] || (_cache[0] = function() {
        return _ctx.handleClose && _ctx.handleClose(...arguments);
      })
    },
    null,
    2
    /* CLASS */
  )) : vue.createCommentVNode("v-if", true), vue.createElementVNode(
    "div",
    {
      class: vue.normalizeClass([_ctx.classnames[_ctx.mode] || "zm-dialog__normal-body", {
        remove: _ctx.hideAnimation
      }])
    },
    [_ctx.closable ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: "close",
      onClick: _cache[1] || (_cache[1] = function() {
        return _ctx.handleClose && _ctx.handleClose(...arguments);
      })
    }, _hoisted_3)) : vue.createCommentVNode("v-if", true), _ctx.mode === "bottom" ? (vue.openBlock(), vue.createElementBlock(
      "div",
      {
        key: 1,
        class: vue.normalizeClass(["zm-dialog__bottom-body--content", _ctx.noPadding && "no-padding", "iphonex", _ctx.className ? _ctx.className.split(" ") : []])
      },
      [vue.renderSlot(_ctx.$slots, "default")],
      2
      /* CLASS */
    )) : _ctx.mode === "center" ? (vue.openBlock(), vue.createElementBlock(
      "div",
      {
        key: 2,
        class: vue.normalizeClass(["zm-dialog__normal-body--content", _ctx.noPadding && "no-padding", _ctx.className ? _ctx.className.split(" ") : []])
      },
      [vue.renderSlot(_ctx.$slots, "default")],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true)],
    2
    /* CLASS */
  )])) : vue.createCommentVNode("v-if", true);
}
var __sfc__ = vue.defineComponent({
  name: "ZmDialog",
  props,
  setup(props2) {
    var classnames = {
      center: "zm-dialog__normal-body",
      bottom: "zm-dialog__bottom-body"
    };
    var _visible = vue.ref(false);
    var hideAnimation = vue.ref(false);
    var handleClose = () => {
      console.log("handleClose");
      hideAnimation.value = true;
      setTimeout(() => {
        hideAnimation.value = false;
        _visible.value = false;
        props2.onClose && props2.onClose();
      }, 300);
    };
    var handleVisible = (visible) => {
      console.log(visible, "visible");
      if (_visible.value === visible)
        return;
      if (!visible) {
        handleClose();
      } else {
        _visible.value = true;
      }
    };
    vue.watch(() => props2.visible, handleVisible);
    return {
      _visible,
      hideAnimation,
      classnames,
      handleClose
    };
  }
});
__sfc__.render = __render__;
const Dialog = __sfc__;
Dialog.install = function(app) {
  app.component(Dialog.name, Dialog);
};
var _DialogComponent = Dialog;
const button = "";
const dialog = "";
const DialogSfc = "";
const version = "0.0.3";
function install(app) {
  Button.install && app.use(Button);
  Dialog.install && app.use(Dialog);
}
const index_bundle = {
  version,
  install,
  Button,
  Dialog
};
exports.Button = Button;
exports.Dialog = Dialog;
exports._ButtonComponent = _ButtonComponent;
exports._DialogComponent = _DialogComponent;
exports.default = index_bundle;
exports.install = install;
exports.version = version;
