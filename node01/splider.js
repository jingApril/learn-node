// 请求网站数据
// 将数据保存本地文件
 const http = require('http')
 const fs = require('fs')
 const cheerio = require('cheerio')
 let url = 'http://www.jsbc.com/'
 let json = 'http://nodejs.org/dist/index.json'

 http.get(url,(res) => {
    // 安全处理
    const {statusCode} = res; //状态码
    const contentType = res.headers['content-type']; // 文件类型
    let err = null 

    if (statusCode !== 200) {
        err = new Error('请求状态错误')
    } else if (!/^text\/html/.test(contentType)) {
        // 格式类型是网页
        err = new Error('请求类型错误')
    }
    // 上面判断有出错
    if (err) {
        console.log(err)
        res.resume(); // 重置缓存
        return false
    }

      console.log(statusCode, contentType)
     // 数据分段，只要接受数据就会触发data事件chunk每次接受的数据片段 
     let rawData = ''
     res.on('data', (chunk) => {
         console.log('----')
         rawData+= chunk.toString('utf8')
         // console.log(chunk.toString('utf8'))
     })
     // 数据流传输完毕
      res.on('end', () => {
          // 将请求的数据保存到本地
          // fs.writeFileSync('./bibi.html', rawData)
           console.log('数据传输完毕')
            let $ = cheerio.load(rawData) // 数据转化
            $('img').each((index, el) => {
                console.log($(el).attr('src'))
            })
      })
 }).on('error', (err) => {
    console.log('请求错误')
 })