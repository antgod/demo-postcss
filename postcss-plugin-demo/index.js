const postcss = require('postcss')

function replaceValues(str) {
  const mapper = {
    helloworld: 'Arial, Helvetica, sans-serif'
  }

  return str.replace(/(.*)family\(\"(.*)\"\)/, (all, prefix, matched, index, input) => {
    const mapped = mapper[matched]
    return mapped ? `${prefix}${mapped}` : input
  })
}

const texts = ['label', 'a', 'span']
const prefixs = ['flex']

module.exports = postcss.plugin('myplugin', function (options) {
	return function (css) {
		options = options || {}

		/* 插入初始化html, body属性 */
		const base = postcss.parse(`html, body, ul{
	margin: 0;
	padding: 0;
}`)
		css.prepend(base)

		css.walkRules(function (rule, rowIndex) {
			if(texts.includes(rule.selector)) {
				// 插入样式属性: color, background-color
				const color = postcss.decl({ prop: 'color', value: 'black' })
				const bgColor = postcss.decl({ prop: 'background-color', value: 'white' })
				rule.prepend(color, bgColor)
			}

			console.log(`${rowIndex + 1 }.处理选择器：`, rule.selector)
			rule.walkDecls(function (decl, i) {
				const { prop, value} = decl
				console.log(`${rowIndex + 1 }.${i + 1 }.处理选择器属性：`, decl.prop)

        // 转换rem为px
				if(value.includes('rem')) {
					decl.value = value.replace(/(.)rem/, (matched, catched) => {
						return Number(catched) * 12 + 'px'
					})
				}

				// 增加前缀
				if(prefixs.includes(prop)) {
					decl.prop = decl.clone({ prop: '-webkit-' + prop }).prop
          rule.append(decl.clone({ prop: '-ms-' + prop }))
				}

				// 转换关键字
        if (value.includes('family')) {
          decl.value = replaceValues(value);
        }
			})
      rule.append({ text: '用户自定义样式' })
		})
	}
})