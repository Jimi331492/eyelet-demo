<template>
	<teleport :to="teleport" :disabled="disabled">
		<transition :name="`${n()}-fade`" @after-enter="onOpened" @after-leave="onClosed">
			<zm-snackbar-core v-bind="$props" :class="n('transition')">
				<template #action>
					<slot name="action" />
				</template>
				<slot>{{ content }}</slot>
			</zm-snackbar-core>
		</transition>
	</teleport>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import ZmSnackbarCore from './core.vue';
	import { createNamespace, useTeleport } from '../utils/components';
	import { props } from './props';

	const { n } = createNamespace('snackbar');

	export default defineComponent({
		name: 'ZmSnackbar',
		components: {
			ZmSnackbarCore,
		},
		props,
		setup() {
			const { disabled } = useTeleport();

			return {
				n,
				disabled,
			};
		},
	});
</script>

<style lang="less">
	@import '../styles/common';
</style>
