<template>
	<app-type>基本使用</app-type>
	<zm-button>基本使用</zm-button>

	<app-type>修改颜色</app-type>
	<zm-space>
		<zm-button color="#B00F0F">#B00F0F</zm-button>
		<zm-button color="#F35918">#F35918</zm-button>
	</zm-space>
	<app-type>修改大小</app-type>
	<zm-space direction="column">
		<zm-button size="small">小型</zm-button>
		<zm-button size="defalut">默认</zm-button>
		<zm-button size="large">大型</zm-button>
	</zm-space>
	<app-type>块级按钮</app-type>
	<zm-space direction="column">
		<zm-button block>块级按钮</zm-button>
	</zm-space>
</template>

<script setup lang="ts">
	import ZmButton from '..';
	import ZmSpace from '../../space';
	import { AppType } from '@varlet/cli/client';
</script>
