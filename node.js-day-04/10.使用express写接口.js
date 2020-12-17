const express = require('express')
const app = express()
const router = require('./11.apirouter')
    //app.use注册全局中间键
app.use('/api', router)
app.listen('80', () => {
    console.log('express server running');
})