<template>
	<app-type>基本使用</app-type>
	<zm-button @click="() => showDialog('center')">普通弹窗</zm-button>
	<app-type>底部升起</app-type>
	<zm-button @click="() => showDialog('bottom')">底部弹窗</zm-button>
	<app-type>关闭遮罩</app-type>
	<zm-button @click="() => showDialog('mask')">关闭遮罩</zm-button>

	<zm-dialog mode="center" :visible="centerDialogVisible" @close="() => handleClose('center')">
		这是一个普通弹窗
	</zm-dialog>
	<zm-dialog mode="bottom" :visible="bottomDialogVisible" @close="() => handleClose('bottom')">
		这是一个底部弹窗
	</zm-dialog>
	<zm-dialog
		mode="center"
		:visible="maksDialogVisible"
		:mask="false"
		@close="() => handleClose('mask')"
	>
		没有遮罩的弹窗
	</zm-dialog>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import ZmDialog from '..';
	import ZmButton from '../../button/Button';
	import { AppType } from '@varlet/cli/client';

	const centerDialogVisible = ref(false);
	const bottomDialogVisible = ref(false);
	const maksDialogVisible = ref(false);
	const showDialog = (e: string) => {
		switch (e) {
			case 'center':
				centerDialogVisible.value = true;
				break;
			case 'bottom':
				bottomDialogVisible.value = true;
				break;
			case 'mask':
				maksDialogVisible.value = true;
				break;
			default:
				break;
		}
	};
	const handleClose = (e: string) => {
		switch (e) {
			case 'center':
				centerDialogVisible.value = false;
				break;
			case 'bottom':
				bottomDialogVisible.value = false;
				break;
			case 'mask':
				maksDialogVisible.value = false;
				break;
			default:
				break;
		}
	};
</script>
