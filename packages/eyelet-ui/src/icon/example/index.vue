<script setup lang="ts">
	import ZmIcon from '..';
	import Toast from '../../toast';
	import dark from '../../themes/dark';
	import { reactive, onMounted, ref } from 'vue';
	import Clipboard from 'clipboard';
	import icons from '@eyelet/icons';
	import { AppType, watchDarkMode } from '@varlet/cli/client';

	const iconNames = reactive(icons);
	const iconName = ref('zm-logo');
	const background = ref('#fff');

	function toggle() {
		iconName.value =
			iconName.value === 'zm-logo'
				? 'https://canyan.kp-static.com/mini/top-loading.gif'
				: 'zm-logo';
	}

	onMounted(() => {
		const clipboard = new Clipboard('.icon-example__icon', {
			text: trigger => `<zm-icon name="${trigger.getAttribute('data-clipboard-text')}" />`,
		});

		clipboard.on('success', e => {
			Toast.info(`${e.text}复制成功!`);
		});
	});

	watchDarkMode(dark, theme => {
		background.value = theme === 'darkTheme' ? '#fff' : '#303030';
	});
</script>

<template>
	<app-type>Icon尺寸</app-type>
	<zm-icon name="zm-logo" />
	<zm-icon name="zm-logo" :size="64" />

	<app-type>Icon颜色</app-type>
	<zm-icon :size="64" name="zm-logo" />
	<zm-icon :size="64" name="zm-logo" color="#2979ff" />

	<app-type>使用图片</app-type>
	<zm-icon name="https://canyan.kp-static.com/mini/top-loading.gif" :size="64" />

	<app-type>注册事件</app-type>
	<zm-icon
		class="icon-example__animation-icon"
		name="zm-logo"
		:size="64"
		color="#2979ff"
		@click="() => Toast('点击成功')"
	/>

	<app-type>切换动画</app-type>
	<zm-icon
		class="icon-example__animation-icon"
		color="#2979ff"
		:size="64"
		:transition="300"
		:name="iconName"
		@click="toggle"
	/>

	<app-type>Icon列表</app-type>
	<div class="icon-example__icons">
		<div
			class="icon-example__icon"
			:style="{ background }"
			:data-clipboard-text="name"
			:key="name"
			v-for="name in iconNames"
		>
			<zm-icon :name="name" />
			<div class="icon-example__icon-name">{{ name }}</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.icon-example {
		&__animation {
			display: flex;
			align-items: center;
			padding-left: 8px;
		}

		&__animation-icon {
			margin-left: 5px;
		}

		&__icons {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
		}

		&__icon {
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 29%;
			padding: 6% 5%;
			margin: 0 2% 4%;
			cursor: pointer;
			-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
			user-select: none;
			border-bottom: 2px solid var(--color-primary);
			transition: background-color 0.25s;
		}

		&__icon-name {
			width: 100%;
			font-size: 12px;
			text-align: center;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-top: 8px;
		}
	}
</style>
