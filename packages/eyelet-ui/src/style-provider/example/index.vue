<script setup lang="ts">
	import StyleProvider, { StyleVars } from '../index';
	import ZmButton from '../../button';
	import dark from '../../themes/dark';
	import { AppType, getBrowserTheme } from '@varlet/cli/client';
	import { ref, onUnmounted, type Ref } from 'vue';

	const ZmStyleProvider = StyleProvider.Component;

	const styleVars: Ref<null> | Ref<StyleVars> = ref({});

	let rootStyleVars: StyleVars | null = null;

	const successTheme = {
		'--rate-primary-color': 'var(--color-success)',
		'--button-primary-color': 'var(--color-success)',
		'--switch-handle-active-background': 'var(--color-success)',
		'--switch-track-active-background': 'var(--color-success)',
	};

	const darkTheme = {
		'--color-primary': '#3f51b5',
	};

	function toggleTheme() {
		styleVars.value = styleVars.value ? null : successTheme;
	}

	function toggleRootTheme() {
		rootStyleVars = rootStyleVars ? null : darkTheme;
		StyleProvider(rootStyleVars);
	}

	onUnmounted(() => {
		StyleProvider(getBrowserTheme() === 'darkTheme' ? dark : null);
	});
</script>

<template>
	<app-type>组件调用</app-type>
	<zm-style-provider :style-vars="styleVars">
		<zm-button style="margin-top: 10px" type="primary" block @click="toggleTheme">
			切换样式变量
		</zm-button>
	</zm-style-provider>

	<app-type>函数调用</app-type>
	<zm-button type="primary" block @click="toggleRootTheme">切换根节点样式变量</zm-button>
</template>
