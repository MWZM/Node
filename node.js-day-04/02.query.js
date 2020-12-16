//1导入express
const express = require('express')
    //2创建web服务器
const app = express()
    //3监听客户端的各种请求

app.get('/user/:id/:name', (req, res) => {
    //进行获取客户端发送过来的参数
    console.log(req.params);
    res.send(req.params)
})
app.get('/user', (req, res) => {
    //进行动态匹配UR参数
    console.log(req.query.name);
    res.send(req.query)
})

//4启动web服务器
app.listen('80', () => {
    console.log('express server running');
})