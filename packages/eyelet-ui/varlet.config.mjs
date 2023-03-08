import { defineConfig } from '@varlet/cli';

export default defineConfig({
	name: 'Eyelet',
	title: 'Eyelet',
	logo: './logo.svg',
	useMobile: true,
	namespace: 'zm',
	host: "localhost",
	port: 8001,
	defaultLanguage: 'zh-CN',
	highlight: {
		/**
		 * @see https://highlightjs.org/
		 */
		style: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css',
	},
	analysis: {
		baidu: '',
	},
	pc: {
		redirect: '/index',
		title: {
			'zh-CN': '窄门餐眼组件库｜Eyelet',
			'en-US': 'Material design mobile components built for Vue3',
		},
		indexPage: {
			description: {
				'zh-CN': '窄门餐眼组件库demo，基于Varlet构建。',
				'en-US':
					'Varlet is a Material design mobile component library developed based on Vue3, developed and maintained by partners in the community. Support Typescript, import on demand, dark mode, theme customization, internationalization, and provide VSCode plugin to ensure a good development experience',
			},
			started: {
				'zh-CN': '起步',
				'en-US': 'GET STARTED',
			},
			features: [
				{
					name: {
						'zh-CN': '窄门餐眼',
						'en-US': null,
					},
					description: {
						'zh-CN': '文档即将更新...',
						'en-US': null,
					},
				},
				{
					name: {
						'zh-CN': '窄门供应链',
						'en-US': null,
					},
					description: {
						'zh-CN': '文档即将更新...',
						'en-US': null,
					},
				},
				{
					name: {
						'zh-CN': '番茄资本',
						'en-US': null,
					},
					description: {
						'zh-CN': '文档即将更新...',
						'en-US': null,
					},
				},
				{
					name: {
						'zh-CN': '窄门学社',
						'en-US': null,
					},
					description: {
						'zh-CN': '文档即将更新...',
						'en-US': null,
					},
				},
				{
					name: {
						'zh-CN': '靠谱餐',
						'en-US': null,
					},
					description: {
						'zh-CN': '文档即将更新...',
						'en-US': null,
					},
				},
				{
					name: {
						'zh-CN': '敬请期待...',
						'en-US': null,
					},
					description: {
						'zh-CN': '文档即将更新...',
						'en-US': null,
					},
				},
			],
			contributors:null,
			// contributors: {
			// 	label: {
			// 		'zh-CN': '团队成员',
			// 		'en-US': 'Contributors',
			// 	},
			// 	link: 'https://github.com/kaoputou/Uther/graphs/contributors',
			// 	image: null,
			// },
			license: {
				'zh-CN': '组件库基于 MIT 协议，您可以自由的使用和分享',
				'en-US': 'Released under the MIT License, You can use and share freely.',
			},
			copyright: {
				'zh-CN': 'Copyright © 2022 varletjs 组织成员以及 varlet 的贡献者们',
				'en-US': 'Copyright © 2022 varletjs member and varlet contributors.',
			},
		},
		header: {
			github: 'https://github.com/Jimi331492/eyelet-demo',
			darkMode: true,
			i18n: null,
			playground: null,
		},
		menu: [
			{
				text: {
					'zh-CN': '开发指南',
				},
				type: 1,
			},
			{
				text: {
					'zh-CN': '基本介绍',
				},
				doc: 'home',
				type: 3,
			},
			{
				text: {
					'zh-CN': '基础组件',
				},
				type: 1,
			},
			{
				text: {
					'zh-CN': 'Button 按钮',
				},
				doc: 'button',
				type: 2,
			},
			{
				text: {
					'zh-CN': 'Dialog 弹窗',
				},
				doc: 'dialog',
				type: 2,
			},
		],
		clipboard: {
			'zh-CN': '代码已复制到剪切板',
			'en-US': 'The code has been copied to the clipboard',
		},
		fold: {
			defaultFold: false,
			foldHeight: 50,
		},
	},
	mobile: {
		redirect: '/home',
		title: {
			'zh-CN': 'Eyelet 面向 Vue3 的 Material 风格移动端组件库',
			'en-US': 'Material design mobile components built for Vue3',
		},
		header: {
			i18n: null,
			github: 'https://github.com/Jimi331492/eyelet-demo',
			darkMode: true,
		},
	},
	themeKey: 'VARLET_THEME',
	darkTheme: {
		'color-body': '#fff',
		'color-index-page-background': '#f2f2f2',
		'color-index-page-feature-background': '#fff',
		'color-index-page-logo-mask-background': 'linear-gradient(-45deg, #8baff8 50%, #84e0ff 50%)',
		'color-index-page-second-text-color': 'rgba(60, 60, 60, .7)',
		'color-index-page-divider-color': '#ddd',
		'color-bar': '#fff',
		'color-sub-bar': '#f5f5f5',
		'color-text': '#555',
		'color-sub-text': '#888',
		'color-border': 'rgba(0, 0, 0, 0.12)',
		'color-shadow': '#eee',
		'color-introduce-border': '#2196f3',
		'color-primary': '#2196f3',
		'color-link': '#00c48f',
		'color-type': '#00c48f',
		'color-loading-bar': '#1d92e9',
		'color-side-bar': '#3a7afe',
		'color-side-bar-active-background': '#3a7afe1a',
		'color-app-bar': '#3a7afe',
		'color-nav-button-hover-background': 'rgba(0, 0, 0, 0.08)',
		'color-mobile-cell-hover': '#3a7afe',
		'color-pc-language-active': '#3a7afe',
		'color-pc-language-active-background': '#edf5ff',
		'color-pc-github-active-background': '#212121',
		'color-mobile-language-active': '#3a7afe',
		'color-mobile-language-active-background': '#edf5ff',
		'color-hl-background': '#fafafa',
		'color-hl-code': '#58727e',
		'color-hl-border': '#f3f3f3',
		'color-hl-group-a': '#7c7c7c',
		'color-hl-group-b': '#2196f3',
		'color-hl-group-c': '#ff9422',
		'color-hl-group-d': '#58c193',
		'color-hl-group-e': '#ff9422',
		'color-hl-group-f': '#ff9422',
		'color-hl-group-g': '#ff9422',
		'color-hl-group-h': '#06a6e9',
		'color-hl-group-i': '#f23733',
	},
	lightTheme: {
		'color-body': '#121212',
		'color-index-page-background': '#1e1e1e',
		'color-index-page-feature-background': '#303030',
		'color-index-page-logo-mask-background': 'linear-gradient(-45deg, #729dfc 50%, #6859f4 50%)',
		'color-index-page-second-text-color': 'rgba(255, 255, 255, .75)',
		'color-index-page-divider-color': 'rgba(84, 84, 84, .8)',
		'color-bar': '#1e1e1e',
		'color-sub-bar': '#272727',
		'color-text': '#fff',
		'color-sub-text': '#aaa',
		'color-border': '#333',
		'color-shadow': '#121212',
		'color-introduce-border': '#555',
		'color-primary': '#96cbfe',
		'color-link': '#A8FFC4',
		'color-type': '#A8FFC4',
		'color-loading-bar': '#5580f8',
		'color-side-bar': '#4a7afe',
		'color-side-bar-active-background': '#4a7afe1a',
		'color-app-bar': '#272727',
		'color-nav-button-hover-background': 'rgba(255, 255, 255, 0.08)',
		'color-mobile-cell-hover': '#4a7afe',
		'color-pc-language-active': '#4a7afe',
		'color-pc-language-active-background': '#4a7afe20',
		'color-pc-github-active-background': '#303030',
		'color-mobile-language-active': '#4a7afe',
		'color-mobile-language-active-background': '#4a7afe20',
		'color-hl-background': '#272727',
		'color-hl-code': '#fff',
		'color-hl-border': '#272727',
		'color-hl-group-a': '#7c7c7c',
		'color-hl-group-b': '#96cbfe',
		'color-hl-group-c': '#ff7b1e',
		'color-hl-group-d': '#A8FFC4',
		'color-hl-group-e': '#ff7b1e',
		'color-hl-group-f': '#ff7b1e',
		'color-hl-group-g': '#ff7b1e',
		'color-hl-group-h': '#14a6e9',
		'color-hl-group-i': '#ed4648',
	},
	icons: {
		name: 'varlet-icons',
		namespace: 'var-icon',
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontFamilyClassName: 'var-icon--set',
		base64: true,
	},
});
