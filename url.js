const url = require('url')

// let urlString = "https:47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567#nihao"
// let urlObj = url.parse(urlString)
// console.log(urlObj)

let obj = {
  protocol: 'https:',
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: '#nihao',
  search: '?us=123&ps=567',
  query: 'us=123&ps=567',
  pathname: '47.95.207.1:3000/fcj/recommend/hot/hehe',
  path: '47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567',
  href: 'https:47.95.207.1:3000/fcj/recommend/hot/hehe?us=123&ps=567#nihao'
}
let string = url.format(obj)
console.log(string)

/*
url  类比json记忆
url.parse 将url字符串转成对象
url.format 将url 对象转字符串
*/