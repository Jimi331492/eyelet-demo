<template>
<teleport :to="teleport" :disabled="disabled">
		<transition :name="`${n()}-fade`" @after-enter="onOpened" @after-leave="onClosed">
			<zm-toast-core v-bind="$props" :class="n('transition')">
				<template #action>
					<slot name="action" />
				</template>
				<slot>{{ content }}</slot>
			</zm-toast-core>
		</transition>
	</teleport>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import ZmToastCore from './core.vue';
	import { createNamespace, useTeleport } from '../utils/components';
	import { props } from './props';

	const { n } = createNamespace('toast');
	export default defineComponent({
		name: 'ZmToast',
		components: {
			ZmToastCore,
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
	@import './toast';
</style>
