const express = require('express')
const app = express()
const router = require('./04.路由模块化')
app.use(router)
app.listen(80, () => {
    console.log('express server running');
})