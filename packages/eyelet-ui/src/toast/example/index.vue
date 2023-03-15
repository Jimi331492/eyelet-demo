<script setup lang="ts">
	import Toast, { type ToastType } from '../index';
	import ZmButton from '../../button';
	import ZmIcon from '../../icon';
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

	const ZmToast = Toast.Component;

	const { show1, show2, show3, show4, show9 } = toRefs(shows);

	function changeValue(type: 'show1' | 'show2' | 'show3' | 'show4' | 'show9') {
		shows[type] = !shows[type];
	}

	function create(type: ToastType) {
		const text = type === 'loading' ? '加载中...' : '这是一条Toast';

		if (type === 'loading') {
			const toast = Toast.loading({
				content: text,
				position: 'center',
				vertical: true,
			});
			setTimeout(() => {
				toast.clear();
				Toast.success({
					content: '加载完成',
					position: 'center',
					vertical: true,
				});
			}, 2000);
		} else {
			Toast[type](text);
		}
	}

	function createToast(type: 'time' | 'position' | null | undefined) {
		if (type === 'time') {
			Toast({
				content: 'Toast函数调用-显示时长-1s',
				duration: 1000,
			});
		}

		if (type === 'position') {
			Toast({
				content: 'Toast函数调用-顶部显示',
				position: 'top',
			});
		}

		if (!type) {
			Toast('Toast函数调用-基本使用');
		}
	}

	function openMultiple() {
		Toast.allowMultiple(true);

		const toast1 = Toast('Toast 1');
		Toast.success('Toast 2');

		setTimeout(() => {
			toast1.clear();
		}, 1000);
	}

	onBeforeUnmount(() => {
		Toast.allowMultiple(false);
	});

	watchDarkMode(dark);
</script>

<template>
	<app-type>组件调用</app-type>
	<zm-space direction="column" :size="['3vw', '4vw']">
		<zm-button type="primary" block size="large" @click="changeValue('show1')">
			基本使用
		</zm-button>
		<zm-button type="primary" block size="large" @click="changeValue('show2')">
			顶部显示
		</zm-button>
		<zm-button type="primary" block size="large" @click="changeValue('show3')">
			垂直排列
		</zm-button>
		<zm-button type="primary" block size="large" @click="changeValue('show4')">
			显示时长
		</zm-button>
		<zm-button type="primary" block size="large" @click="changeValue('show9')">
			禁止穿透点击
		</zm-button>
	</zm-space>

	<app-type>函数调用</app-type>
	<zm-space direction="column" :size="['3vw', '4vw']">
		<zm-button type="warning" block size="large" @click="createToast(null)">基本使用</zm-button>
		<zm-button type="warning" block size="large" @click="createToast('time')">
			显示时长
		</zm-button>
		<zm-button type="warning" block size="large" @click="createToast('position')">
			顶部显示
		</zm-button>
	</zm-space>

	<app-type>Toast类型</app-type>
	<zm-space direction="column" :size="['3vw', '4vw']">
		<zm-button type="success" block size="large" @click="create('success')">成功</zm-button>
		<zm-button type="warning" block size="large" @click="create('warning')">警告</zm-button>
		<zm-button type="info" block size="large" @click="create('info')">消息</zm-button>
		<zm-button type="danger" block size="large" @click="create('error')">错误</zm-button>
		<zm-button type="primary" block size="large" @click="create('loading')">加载</zm-button>
	</zm-space>

	<app-type>多例模式</app-type>
	<zm-button type="primary" block size="large" @click="openMultiple">多例模式</zm-button>

	<div class="toast-demo">
		<zm-toast v-model:show="show1">Toast组件调用-基本使用</zm-toast>

		<zm-toast v-model:show="show2" position="top">
			Toast组件调用-顶部显示
			<template #action>
				<zm-icon :size="12" name="select" @click="show2 = false" />
			</template>
		</zm-toast>

		<zm-toast v-model:show="show3" position="center" :vertical="true">
			Toast组件调用-垂直排列-居中显示
			<template #action><zm-icon name="zm-logo" /></template>
		</zm-toast>

		<zm-toast v-model:show="show4" :duration="1000">Toast组件调用-显示时长-1s</zm-toast>

		<zm-toast v-model:show="show9" :forbid-click="true">Toast组件调用-禁止穿透点击</zm-toast>
	</div>
</template>
