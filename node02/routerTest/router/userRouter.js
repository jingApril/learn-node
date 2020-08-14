var express = require('express')
var router = express.Router() //获取路由的实例

// define the home page route
router.get('/add', function (req, res) {
  res.send('user add')
})

router.get('/del', function (req, res) {
    res.send('user deleted')
  })
  
module.exports = router