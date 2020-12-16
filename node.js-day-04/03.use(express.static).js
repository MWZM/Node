//1导入express
const express = require('express')
    //2创建web服务器
const app = express()
    //3监听客户端的各种请求
app.use(express.static('./clock'))
app.use(express.static('./test'))

//4启动web服务器
app.listen('80', () => {
    console.log('express server running');
})