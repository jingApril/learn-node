const express = require('express')
const app = express()
const bodyparser = require('body-parser')
//app.use 使用中间件（插件）
// 解析表单数据 > x-www-form-urlencode
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
// 最简单的api接口
app.get('/user/login', (req,res) => {
    // 如何接受get参数query
    console.log(req.query)
    console.log('你好')
    let {user,ps} = req.query
    // 处理参数
    if (user == 'wangyi' && ps == 456) {
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

app.post('/user/reg',(req,res) => {
    // 接受post： 数据消息体 req.body
    let {user,ps} = req.body
    console.log(req.body)
    // express 不能直接解析消息体
    // 通过第三方的插件实现解析
    if (user == 123 && ps == 123) {
        res.send({ err: 0, msg : 'us pass ok ok'})
    } else {
        res.send({ err: -1, msg : 'not ok'})
    }
})

// app.get('/movie/del',(req,res) => {
//     res.send('hehe test')
// })
// express 实例化
app.listen(3000, () => {
    // 监听3000端口 开启服务器
    console.log('server start')
})

// http://www.baidu.com/suer/hehe?us=123&ps=123
// http://localhost:3000/user/login
// http://localhost:3000/user/reg

/*
API 接口的构成要素
ip
port
pathname 语义化
method get post
接受用户传递数据 数据格式是由7
*/
