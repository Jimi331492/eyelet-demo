import Button from './button/index.mjs'
import Dialog from './dialog/index.mjs'

export * from './button/index.mjs'
export * from './dialog/index.mjs'

const version = '0.0.3'

function install(app) {
  Button.install && app.use(Button)
  Dialog.install && app.use(Dialog)
}

export {
  version,
  install,
  Button,
  Dialog
}

export default {
  version,
  install,
  Button,
  Dialog
}
