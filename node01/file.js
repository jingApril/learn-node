const fs = require('fs');
// 创建文件 覆盖写入
/* fs.writeFile('name.txt', '今天天气不错123', (err) => {
  console.log(err);
}) */
// 写入文件
// fs.appendFile('name.txt', '你好韩梅梅', (err) => {
//   console.log(err)
// })

// 读取文件

// fs.readFile('name.txt', 'utf8', (err, data) => {
//   console.log(err)
//   console.log(data)
//     // console.log(data.toString('utf8'))
//     // 默认读取二进制数据流 buffer
// })
// 删除文件
fs.unlink('./name.txt', (err) => {
  console.log(err)
})
