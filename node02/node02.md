## node 02

### 通过express框架书写api

### 什么是api 
    ajax 2007-2008年左右
    前端后端分离 前端通过ajax请求数据

    $.get('http://www.baidu.com/user/login?us=123&ps=456',() => {

    })
通过api 接口实现数据的请求
前端：
    1. 写界面
    2. 请求数据
    3. 数据处理
后端： 写api接口

登录接口逻辑分析
1. 接受用户传递数据
2. 处理数据
3. 返回数据

### express 基本使用
1. 安装 express
```
npm install express -save
```
模块（第三方）的引用 从当前目录的node_modules以此向上寻找

### 服务器相关

服务器： 1. 服务器就是一台电脑 2.服务器软件（apach, tomcat, iis ,ngnix, node) 3. 服务器ip和端口号(80)默认端口号
局域网：服务器通过网线（无线） 每个电脑都会有一个ip
外网：


### api接口的书写
    + 接受数据
        - get req.query
        - post req.body 需要body-parser 插件进行解析
            + 注意数据格式 json x-www-form-urencode  formdata
### postman 接口测试

### 中间件 middlewear

### 静态资源目录 static 

### 路由
    user/add
    user/del
    food/add
    food/del

###  非关系数据库(文档) mongodb