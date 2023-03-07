export function defineListenerProp(fallback) {
  return {
    type: [Function, Array],
    default: fallback
  };
}