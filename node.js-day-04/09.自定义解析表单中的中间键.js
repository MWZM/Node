//1导入express
const express = require('express')
    //2创建web服务器
const app = express()
app.use((req, res, next) => {
        //定义一个str字符串，专门用来存储客户端发来的数据
        let str = ''
            //如果数据量很大这里就会将字符串进行分割，然后再进行发送，解析，最后进行拼接
        req.on('data', (chunk) => {
                str += chunk
                console.log(str);
            })
            //监听req 的end事件
        req.on('end', () => {
            //在str中存放的是完整的请求体数据
            const body = qs.parse(str)
            req.body = body
            next()
        })
    })
    //3监听客户端的各种请求

app.post('/user', (req, res) => {
        res.send(req.body)
    })
    //4启动web服务器
app.listen('80', () => {
    console.log('express server running');
})