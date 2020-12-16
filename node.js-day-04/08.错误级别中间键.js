//1导入express
const express = require('express')
    //2创建web服务器
const app = express()
    //3监听客户端的各种请求

app.post('/user', (req, res) => {
        res.send('请求成功')
    })
    //错误级别中间键必须放在所有路由之后
app.use((err, req, res, next) => {
        res.send('错误')
    })
    //4启动web服务器

app.listen('80', () => {
    console.log('express server running');
})