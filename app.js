const express = require('express');
var server = express();
var router = express.Router();
var user = require('./router/user');
// var about = require('./router/about');
const path = require('path');
const bodyParse = require('body-parser');
var multer = require("multer");
require('./model/db')

server.use('/uploads', express.static(__dirname + '/uploads'))



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
const upload = multer({dest: __dirname + '/uploads'})
server.use('/user', user);
server.post('/upload',upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
})




server.listen(4040);
console.log('启动4040！')
