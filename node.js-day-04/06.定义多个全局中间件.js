const express = require('express')
const app = express()
app.use(function(req, res, next) {
    next()
})
app.use(function(req, res, next) {
    next()
})
app.use(function(req, res, next) {
    next()
})
app.listen('80', () => {
    console.log('express server running');
})