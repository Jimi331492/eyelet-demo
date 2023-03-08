const px2viewport = require('postcss-px-to-viewport');

module.exports = () => {
	let plugins = [];
	if (process.env.NODE_ENV !== 'compile') {
		plugins = [
			px2viewport({
				viewportWidth: 750,
				unitPrecision: 6,
				unitToConvert: 'px',
				viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
				fontViewportUnit: 'vw', // 字体使用的视口单位
				selectorBlackList: [], // 选择黑名单
				propList: ['*'],
				exclude: [
					/site\/components\//,
					/site\/mobile/,
					/site\/pc/,
					/src\/row\/example\/Responsive.vue/,
					/src\/row\/example\/ResponsiveObject.vue/,
				],
			}),
			px2viewport({
				viewportWidth: 375,
				unitPrecision: 6,
				unitToConvert: 'px',
				viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
				fontViewportUnit: 'vw', // 字体使用的视口单位
				selectorBlackList: [], // 选择黑名单
				propList: ['*'],
				exclude: [/site\/components\//, /site\/pc/, /src\/row\/example\/Responsive.vue/, /src\/row\/example\/ResponsiveObject.vue/],
				include: [/site\/mobile/],
			}),
		];
	}

	return { plugins };
};
