import { defineComponent as v, createVNode as y, ref as c, watch as C, openBlock as i, createElementBlock as r, normalizeClass as d, createCommentVNode as u, createElementVNode as p, renderSlot as f, pushScopeId as k, popScopeId as h } from "vue";
const l = v({
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
  setup(e, o) {
    var {
      slots: n
    } = o, s = (t) => e.onClick == null ? void 0 : e.onClick(t);
    return () => {
      var {
        color: t
      } = e;
      return y("button", {
        class: "zm-button",
        style: {
          background: t
        },
        onClick: s
      }, [n.default == null ? void 0 : n.default()]);
    };
  }
});
l.install = function(e) {
  e.component(l.name, l);
};
var w = l;
function B(e) {
  return {
    type: [Function, Array],
    default: e
  };
}
function z(e) {
  return ["center", "bottom"].includes(e);
}
var _ = {
  mode: {
    type: String,
    require: !0,
    default: "center",
    validator: z
  },
  className: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    require: !0,
    default: !1
  },
  mask: {
    type: Boolean,
    default: !0
  },
  // 是否展示遮罩
  maskClosable: {
    type: Boolean,
    default: !0
  },
  // 点击遮罩是否能关闭
  closable: {
    type: Boolean,
    default: !1
  },
  // 是否展示关闭按钮
  noPadding: {
    type: Boolean,
    default: !1
  },
  onClose: B()
}, N = (e) => (k(""), e = e(), h(), e), S = {
  key: 0,
  class: "zm-dialog"
}, V = /* @__PURE__ */ N(() => /* @__PURE__ */ p(
  "span",
  {
    class: "icomoon icon-close"
  },
  null,
  -1
  /* HOISTED */
)), A = [V];
function D(e, o) {
  return e._visible ? (i(), r("div", S, [e.mask ? (i(), r(
    "div",
    {
      key: 0,
      class: d(["zm-dialog__mask", {
        remove: e.hideAnimation
      }]),
      onClick: o[0] || (o[0] = function() {
        return e.handleClose && e.handleClose(...arguments);
      })
    },
    null,
    2
    /* CLASS */
  )) : u("v-if", !0), p(
    "div",
    {
      class: d([e.classnames[e.mode] || "zm-dialog__normal-body", {
        remove: e.hideAnimation
      }])
    },
    [e.closable ? (i(), r("div", {
      key: 0,
      class: "close",
      onClick: o[1] || (o[1] = function() {
        return e.handleClose && e.handleClose(...arguments);
      })
    }, A)) : u("v-if", !0), e.mode === "bottom" ? (i(), r(
      "div",
      {
        key: 1,
        class: d(["zm-dialog__bottom-body--content", e.noPadding && "no-padding", "iphonex", e.className ? e.className.split(" ") : []])
      },
      [f(e.$slots, "default")],
      2
      /* CLASS */
    )) : e.mode === "center" ? (i(), r(
      "div",
      {
        key: 2,
        class: d(["zm-dialog__normal-body--content", e.noPadding && "no-padding", e.className ? e.className.split(" ") : []])
      },
      [f(e.$slots, "default")],
      2
      /* CLASS */
    )) : u("v-if", !0)],
    2
    /* CLASS */
  )])) : u("v-if", !0);
}
var g = v({
  name: "ZmDialog",
  props: _,
  setup(e) {
    var o = {
      center: "zm-dialog__normal-body",
      bottom: "zm-dialog__bottom-body"
    }, n = c(!1), s = c(!1), t = () => {
      console.log("handleClose"), s.value = !0, setTimeout(() => {
        s.value = !1, n.value = !1, e.onClose && e.onClose();
      }, 300);
    }, b = (m) => {
      console.log(m, "visible"), n.value !== m && (m ? n.value = !0 : t());
    };
    return C(() => e.visible, b), {
      _visible: n,
      hideAnimation: s,
      classnames: o,
      handleClose: t
    };
  }
});
g.render = D;
const a = g;
a.install = function(e) {
  e.component(a.name, a);
};
var E = a;
const P = "0.0.3";
function I(e) {
  l.install && e.use(l), a.install && e.use(a);
}
const F = {
  version: P,
  install: I,
  Button: l,
  Dialog: a
};
export {
  l as Button,
  a as Dialog,
  w as _ButtonComponent,
  E as _DialogComponent,
  F as default,
  I as install,
  P as version
};
