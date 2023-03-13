module.exports = {
	printWidth: 100, // 超过最大值换行
	tabWidth: 4, // 缩进字节数
	useTabs: true, // 缩进是否使用tab，
	semi: true, // 句尾添加分号
	vueIndentScriptAndStyle: true, // 缩进Vue文件中的脚本和样式标签
	singleQuote: true, // 使用单引号代替双引号
	quoteProps: 'as-needed', // 要求对象中的属性是否用引号包上，"as-needed"：当没有严格要求时，禁止对象字面量属性名称使用引号；"consistent"：要求对象字面量属性名称使用一致的引号，要么全部用引号，要么都不用；"preserve"：想用就用
	bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
	trailingComma: 'all', // es5 遵循 es5 语法中定义的尾逗号， none 无尾逗号, all 尽可能在结尾处加上尾逗号
	jsxBracketSameLine: false, // 在jsx中把'>' 单独放一行
	jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
	arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 always:总是
	proseWrap: 'never', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
	htmlWhitespaceSensitivity: 'ignore',
	endOfLine: 'lf', // 行结尾方式 "lf"：\n；"crlf"：\r\n；"cr"：\r；"auto"
};
