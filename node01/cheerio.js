const cheerio = require('cheerio')
let $ = cheerio.load('<div><p>你好</p><img src="www.jstc.com"><img src="qqq"></div>')
// 将一组html格式的字符串 转化成dom 之后可以通过jq的语法选中其中的元素
// console.log($('img').attr('src'))

$('img').each((index, el) => {
    console.log($(el).attr('src'))
})
