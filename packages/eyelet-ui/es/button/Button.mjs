import { createVNode as _createVNode } from "vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ZmButton',
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
  setup(props, _ref) {
    var {
      slots
    } = _ref;
    var handleClick = e => props.onClick == null ? void 0 : props.onClick(e);
    return () => {
      var {
        color
      } = props;
      return _createVNode("button", {
        "class": "zm-button",
        "style": {
          background: color
        },
        "onClick": handleClick
      }, [slots.default == null ? void 0 : slots.default()]);
    };
  }
});