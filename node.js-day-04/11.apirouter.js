const express = require('express')
const router = express.Router()
    //挂载路由


//配置中间键
//get接口
router.get('/get', (req, res) => {
    const query = req.query
    res.send({
        status: 0,
        msg: 'GET请求成功',
        data: query

    })
})

//post接口
router.post('/post', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body

    })
})
module.exports = router