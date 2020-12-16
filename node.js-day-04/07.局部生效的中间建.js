//1导入express
const express = require('express')
    //2创建web服务器
const app = express()
    //3监听客户端的各种请求
const mw1 = (req, res, next) => {
    console.log('执行了这次中间键');
    next()
}
app.post('/user', mw1, (req, res) => {
    res.send('请求成功')
})

//4启动web服务器

app.listen('80', () => {
    console.log('express server running');
})