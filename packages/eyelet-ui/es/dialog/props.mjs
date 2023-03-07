import { defineListenerProp } from '../utils/components.mjs';
function mdoeValidator(mode) {
  return ['center', 'bottom'].includes(mode);
}
export var props = {
  mode: {
    type: String,
    require: true,
    default: 'center',
    validator: mdoeValidator
  },
  className: {
    type: String,
    default: ''
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