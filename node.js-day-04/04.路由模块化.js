const express = require('express')
const router = express.Router()
router.get('user/list', (req, res) => {
    res.send('hello')
})
router.post('user/add', (req, res) => {
    res.send('hello,world')
})
module.exports = router