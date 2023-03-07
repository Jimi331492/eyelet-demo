import { defineComponent, ref, watch } from 'vue';
import { props } from './props.mjs';
import { normalizeClass as _normalizeClass, openBlock as _openBlock, createElementBlock as _createElementBlock, createCommentVNode as _createCommentVNode, createElementVNode as _createElementVNode, renderSlot as _renderSlot, pushScopeId as _pushScopeId, popScopeId as _popScopeId } from "vue";
var _withScopeId = n => (_pushScopeId(""), n = n(), _popScopeId(), n);
var _hoisted_1 = {
  key: 0,
  class: "zm-dialog"
};
var _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/_createElementVNode("span", {
  class: "icomoon icon-close"
}, null, -1 /* HOISTED */));
var _hoisted_3 = [_hoisted_2];
function __render__(_ctx, _cache) {
  return _ctx._visible ? (_openBlock(), _createElementBlock("div", _hoisted_1, [_ctx.mask ? (_openBlock(), _createElementBlock("div", {
    key: 0,
    class: _normalizeClass(['zm-dialog__mask', {
      remove: _ctx.hideAnimation
    }]),
    onClick: _cache[0] || (_cache[0] = function () {
      return _ctx.handleClose && _ctx.handleClose(...arguments);
    })
  }, null, 2 /* CLASS */)) : _createCommentVNode("v-if", true), _createElementVNode("div", {
    class: _normalizeClass([_ctx.classnames[_ctx.mode] || 'zm-dialog__normal-body', {
      remove: _ctx.hideAnimation
    }])
  }, [_ctx.closable ? (_openBlock(), _createElementBlock("div", {
    key: 0,
    class: "close",
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.handleClose && _ctx.handleClose(...arguments);
    })
  }, _hoisted_3)) : _createCommentVNode("v-if", true), _ctx.mode === 'bottom' ? (_openBlock(), _createElementBlock("div", {
    key: 1,
    class: _normalizeClass(['zm-dialog__bottom-body--content', _ctx.noPadding && 'no-padding', true && 'iphonex', _ctx.className ? _ctx.className.split(' ') : []])
  }, [_renderSlot(_ctx.$slots, "default")], 2 /* CLASS */)) : _ctx.mode === 'center' ? (_openBlock(), _createElementBlock("div", {
    key: 2,
    class: _normalizeClass(['zm-dialog__normal-body--content', _ctx.noPadding && 'no-padding', _ctx.className ? _ctx.className.split(' ') : []])
  }, [_renderSlot(_ctx.$slots, "default")], 2 /* CLASS */)) : _createCommentVNode("v-if", true)], 2 /* CLASS */)])) : _createCommentVNode("v-if", true);
}
var __sfc__ = defineComponent({
  name: 'ZmDialog',
  props,
  setup(props) {
    var classnames = {
      center: 'zm-dialog__normal-body',
      bottom: 'zm-dialog__bottom-body'
    };
    var _visible = ref(false);
    var hideAnimation = ref(false);
    var handleClose = () => {
      console.log('handleClose');
      hideAnimation.value = true;
      setTimeout(() => {
        hideAnimation.value = false;
        _visible.value = false;
        props.onClose && props.onClose();
      }, 300);
    };
    var handleVisible = visible => {
      console.log(visible, 'visible');
      if (_visible.value === visible) return;
      if (!visible) {
        handleClose();
      } else {
        _visible.value = true;
      }
    };
    watch(() => props.visible, handleVisible);
    return {
      _visible,
      hideAnimation,
      classnames,
      handleClose
    };
  }
});
__sfc__.render = __render__;
export default __sfc__;