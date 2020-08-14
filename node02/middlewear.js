const express = require('express')
const app = express()

app.use('/',(req,res,next) => {
    console.log('中间件')

    next() // 是否继续往下执行
})

app.get('/test1', (req,res) => {
    console.log('test1')
    let {token} = req.query
    if (token) {
        res.send('ok')
    } else {
        res.send('no ok')
    }
})

app.get('/test2', (req,res) => {
    console.log('test2')
    let {token} = req.query
    if (token) {
        res.send('ok')
    } else {
        res.send('no ok')
    }

})

app.listen(3000, () => {
    console.log('服务器开启')
})