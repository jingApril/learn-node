const fs = require('fs')

// fs.mkdir('./test', (err) => {
//   console.log(err)
// })
// 更改
// fs.rename('./test', './test2', (err) => {
//   if(err) {
//     console.log('更改失败')
//   } else {
//     console.log('ok')
//   }
// })

// 删除

fs.rmdir('./test2', (err) => {
  console.log(err)
})
