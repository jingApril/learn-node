 const qs = require('querystring')
// let string = 'name=wangyi&pass=123&sex=0'
// let obj = qs.parse(string,'&', '=')
//     // 将query  字符串变成query对象 split
// console.log(obj)

// stringfy
// obj2 = { name: 'wangyi', pass: '123', sex: '0' }
// let string2 = qs.stringify(obj2)
// console.log(string2)


let stringfg = 'w=你好&foo=bar'
let result1 = qs.unescape(stringfg)
console.log(result1)

let  escape = 'w=%D6%D0%CE%C4&foo=bar'
let result2 = qs.unescape(escape);
console.log(result2)