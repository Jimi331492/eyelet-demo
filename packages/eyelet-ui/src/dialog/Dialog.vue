<template>
	<div v-if="_visible" class="zm-dialog">
		<div v-if="mask" :class="['zm-dialog__mask', { remove: hideAnimation }]" @click="handleClose" />
		<div :class="[classnames[mode] || 'zm-dialog__normal-body', { remove: hideAnimation }]">
			<div v-if="closable" class="close" @click="handleClose">
				<span class="icomoon icon-close" />
			</div>
			<div
				v-if="mode === 'bottom'"
				:class="['zm-dialog__bottom-body--content', noPadding && 'no-padding', true && 'iphonex', className ? className.split(' ') : []]"
			>
				<slot />
			</div>
			<div
				v-else-if="mode === 'center'"
				:class="['zm-dialog__normal-body--content', noPadding && 'no-padding', className ? className.split(' ') : []]"
			>
				<slot />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, watch } from 'vue';
	import { props } from './props';

	export default defineComponent({
		name: 'ZmDialog',
		props,
		setup(props) {
			const classnames = {
				center: 'zm-dialog__normal-body',
				bottom: 'zm-dialog__bottom-body',
			};
			const _visible = ref(false);
			const hideAnimation = ref(false);
			const handleClose = (): void => {
				console.log('handleClose');

				hideAnimation.value = true;
				setTimeout(() => {
					hideAnimation.value = false;
					_visible.value = false;
					props.onClose && props.onClose();
				}, 300);
			};

			const handleVisible = (visible: boolean): void => {
				console.log(visible, 'visible');

				if (_visible.value === visible) return;

				if (!visible) {
					handleClose();
				} else {
					_visible.value = true;
				}
			};

			watch(() => props.visible, handleVisible);

			return {
				_visible,
				hideAnimation,
				classnames,
				handleClose,
			};
		},
	});
</script>

<style lang="less">
	@import './dialog.less';
</style>
