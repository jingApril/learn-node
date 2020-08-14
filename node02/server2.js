const express = require('express')
const app = express()

// 最简单的api接口
app.get('/user/login', (req, res) => {
    // 如何接受get参数query
    console.log(req.query)
    console.log('你好')
    let { user, ps} = req.query
    // 处理参数
    if(user == 'wangyi' && ps == 456){
        res.send({
            err: 0,
            msg: 'regist okokoko'
        })
    } else {
        res.send({
            err: -1,
            msg: '密码错误'
        })
    }
})
// express 实例化
app.listen(3000, () => {
    // 监听3000端口 开启服务器
    console.log('server start')
})


