// 引入三方模块
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/resolution', { useNewUrlParser: true } )
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))

// const userSchema = new mongoose.Schema({
//     userName: String,
//     password: String,
//     phone: String,
//     email: String
// });
// const User = mongoose.model('User',userSchema) // user集合
// User.find().then(res => console.log(res))
