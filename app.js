const express = require('express');
var server = express();
var router = express.Router();
var user = require('./router/user');
var about = require('./router/about');
require('./model/db')


server.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// server.post('/login', (request, response, next) => {
//     console.log(111111)
//     response.send('请求通过！')
// });

// app.use(bodyParse.urlencoded({extended:false}))

server.use('/user', user);




server.listen(4040);
console.log('启动4040！')
