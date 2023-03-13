<script setup lang="ts">
	import ZmButton from '../../button';
	import { AppType, watchDarkMode } from '@varlet/cli/client';
	import dark from '../../themes/dark';

	const toggleTheme = () => window!.toggleTheme();
	watchDarkMode(dark);
</script>

<template>
	<app-type>切换主题</app-type>
	<zm-button block @click="toggleTheme">切换主题</zm-button>
</template>
