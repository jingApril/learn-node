const qs = require('querystring')
let string = 'name=wangyi&pass=123&sex=0'
let obj = qs.parse(string,'&', '=')
// 将query  字符串变成query对象 split
console.log(obj)

// stringfy
obj2 = { name: 'wangyi', pass: '123', sex: '0' }
let string2 = qs.stringify(obj2)
console.log(string2)
