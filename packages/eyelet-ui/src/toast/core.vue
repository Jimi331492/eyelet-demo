<template>
	<div
		:class="n()"
		:style="{ pointerEvents: isForbidClick ? 'auto' : 'none', zIndex }"
		v-show="show"
	>
		<div
			:class="
				classes(
					n('wrapper'),
					n(`wrapper-${position}`),
					n('$-elevation--4'),
					[vertical, n('vertical')],
					[type && TOAST_TYPE.includes(type), n(`wrapper-${type}`)],
				)
			"
			:style="{ zIndex }"
		>
			<div :class="[n('content'), contentClass]">
				<div :class="n('content--action')">
					<zm-icon v-if="iconName" :name="iconName" :size="12" />
					<slot name="action" />
				</div>
				<slot>{{ content }}</slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import {
		defineComponent,
		watch,
		ref,
		onMounted,
		computed,
		type Ref,
		type ComputedRef,
	} from 'vue';
	import ZmIcon from '../icon';
    import { props } from './props';
    import { TOAST_TYPE, type ToastType } from './index';
	import { useZIndex } from '../context/zIndex';
	import { useLock } from '../context/lock';
	import { call, createNamespace } from '../utils/components';

	const { n, classes } = createNamespace('toast');

	const ICON_TYPE_DICT: Record<ToastType, string> = {
		success: 'select',
		warning: 'select',
		info: 'select',
		error: 'select',
		loading: 'select',
	};

	export default defineComponent({
		name: 'ZmToastCore',
		components: {
			ZmIcon,
		},
		props,
		setup(props) {
			const timer: Ref = ref(null);
			const { zIndex } = useZIndex(() => props.show, 1);

			useLock(
				() => props.show,
				() => props.lockScroll,
			);

			const isForbidClick: ComputedRef<boolean> = computed(
				() => props.type === 'loading' || props.forbidClick,
			);

			const iconName: ComputedRef<string> = computed(() => {
				if (!props.type) return '';

				return ICON_TYPE_DICT[props.type];
			});

			const updateAfterDuration = () => {
				timer.value = setTimeout(() => {
					props.type !== 'loading' && call(props['onUpdate:show'], false);
				}, props.duration);
			};

			watch(
				() => props.show,
				show => {
					if (show) {
						call(props.onOpen);
						updateAfterDuration();
					} else if (show === false) {
						clearTimeout(timer.value);
						call(props.onClose);
					}
				},
			);

			watch(
				() => props._update,
				() => {
					clearTimeout(timer.value);
					updateAfterDuration();
				},
			);

			onMounted(() => {
				if (props.show) {
					call(props.onOpen);
					updateAfterDuration();
				}
			});

			return {
				TOAST_TYPE,
				n,
				classes,
				zIndex,
				iconName,
				isForbidClick,
			};
		},
	});
</script>

<style lang="less">
	@import '../styles/common';
	@import '../button/button';
	@import '../icon/icon';
	@import './toast';
</style>
