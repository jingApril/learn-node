const  fs = require('fs')

// 同步读取文件 在关键位置捕获错误信息
// try {
//  // 可能出错的代码
//   let dirs =  fs.readdirSync('./node02')
// }
//  catch(err){
//   console.log('出错了')
//   console.log(err)
// }
// console.log(222)

// 异步读取

fs.readdir( './node02', (err, data) => {
  console.log(err)
  console.log(data)
  if(err) {
   console.log('读取错误')
  } else{
     console.log(data)
  }
})
console.log(222)

// 错误的回调优先， 在回调函数中第一个参数表示错误对象，默认为空(null)

/*
错误处理
同步：try catch
异步： 错误回调优先
文件夹的错误
curd ( creat update read del )

*/
