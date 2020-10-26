var express = require('express');
var router = express.Router();

router.post('/login', require('./user/login'));
router.post('/register', require('./user/register'));

module.exports = router;
