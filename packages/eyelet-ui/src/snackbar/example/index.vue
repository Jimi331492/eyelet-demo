<script setup lang="ts">
	import Snackbar from '../index';
	import ZmButton from '../../button';
	import ZmSpace from '../../space';
	import dark from '../../themes/dark';
	import { AppType, watchDarkMode } from '@varlet/cli/client';
	import { reactive, toRefs, onBeforeUnmount } from 'vue';

	interface Shows {
		show1: boolean;
		show2: boolean;
		show3: boolean;
		show4: boolean;
		show9: boolean;
	}
	const shows: Shows = reactive({
		show1: false,
		show2: false,
		show3: false,
		show4: false,
		show9: false,
	});

	const zmSnackbar = Snackbar.Component;

	const { show1, show2, show3, show4, show9 } = toRefs(shows);

	function changeValue(type: 'show1' | 'show2' | 'show3' | 'show4' | 'show9') {
		shows[type] = !shows[type];
	}

	function createSnackbar(type: string) {
		if (type === 'time') {
			Snackbar({
				content: 'pack.value.text',
				duration: 1000,
			});
		}

		if (type === 'position') {
			Snackbar({
				content: 'pack.value.text',
				position: 'bottom',
			});
		}

		if (!type) {
			Snackbar('pack.value.text');
		}
	}

	function openMultiple() {
		Snackbar.allowMultiple(true);

		const snackbar1 = Snackbar('Snackbar 1');
		Snackbar.success('Snackbar 2');

		setTimeout(() => {
			snackbar1.clear();
		}, 1000);
	}

	onBeforeUnmount(() => {
		Snackbar.allowMultiple(false);
	});

	watchDarkMode(dark);
</script>

<template>
	<app-type>组件调用</app-type>
	<zm-space direction="column" :size="['3vw', '4vw']">
		<zm-button type="primary" block @click="changeValue('show1')">基本使用</zm-button>
		<zm-button type="primary" block @click="changeValue('show3')">垂直排列</zm-button>
		<zm-button type="primary" block @click="changeValue('show2')">底部显示</zm-button>
		<zm-button type="primary" block @click="changeValue('show4')">显示时长</zm-button>
		<zm-button type="primary" block @click="changeValue('show9')">禁止穿透点击</zm-button>
	</zm-space>

	<app-type>函数调用</app-type>
	<zm-space direction="column" :size="['3vw', '4vw']">
		<zm-button type="warning" block @click="createSnackbar('')">基本使用</zm-button>
		<zm-button type="warning" block @click="createSnackbar('time')">显示时长</zm-button>
		<zm-button type="warning" block @click="createSnackbar('position')">底部显示</zm-button>
	</zm-space>

	<app-type>多例模式</app-type>
	<zm-button type="primary" block @click="openMultiple">多例模式</zm-button>

	<div class="snackbar-demo">
		<zm-snackbar v-model:show="show1">这是一个消息条！！</zm-snackbar>

		<zm-snackbar v-model:show="show2" position="bottom">
			这是一个消息条！！
			<template #action>
				<zm-button type="primary" @click="show2 = false">关闭</zm-button>
			</template>
		</zm-snackbar>

		<zm-snackbar v-model:show="show3" :vertical="true">
			这是一个消息条！！
			<template #action>
				<zm-button type="primary" @click="show3 = false">关闭</zm-button>
			</template>
		</zm-snackbar>

		<zm-snackbar v-model:show="show4" :duration="1000">这是一个消息条！！</zm-snackbar>

		<zm-snackbar v-model:show="show9" :forbid-click="true">这是一个消息条！！</zm-snackbar>
	</div>
</template>
