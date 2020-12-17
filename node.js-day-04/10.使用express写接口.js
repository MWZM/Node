const express = require('express')
const app = express()

const router = require('./11.apirouter')
    //app.use注册全局中间键
app.use('/api', router)

//对post请求进行配置
router.use(express.urlencoded({ extended: false }))

app.listen('80', () => {
    console.log('express server running');
})