import Dialog from '..';
import { createApp } from 'vue';
import { mount } from '@vue/test-utils';

test('test dialog plugin', () => {
	const app = createApp({}).use(Dialog);
	expect(app.component(Dialog.name)).toBeTruthy();
});
