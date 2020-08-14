const express = require('express')
const app = express()

let userRouter = require('./router/userRouter')
let foodRouter = require('./router/foodRouter')
app.use('/user', userRouter)
app.use('/food', foodRouter)
app.listen(3000, () => {
    // 监听3000 端口 开始服务器ç
    console.log('服务器已开启')
})

// localhost:3000/user/del