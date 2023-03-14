import Toast from '..'
import { createApp } from 'vue'
import { mount } from '@vue/test-utils'

test('test toast plugin', () => {
  const app = createApp({}).use(Toast)
  expect(app.component(Toast.name)).toBeTruthy()
})
