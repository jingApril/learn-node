const express = require('express')
const router = express.Router()

router.get('/add', (req, res) => {
    res.send('food add')
})

router.get('/del', (req, res) => {
    res.send('food del')
})


module.exports = router