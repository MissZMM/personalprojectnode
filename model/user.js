// const Joi = require('joi');
//导入bcrypt
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 10
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    }
});
// 使用规则创建集合
const User = mongoose.model('User',userSchema) // user集合

// // 方式一
// // 创建集合的实例
// const user = new User({
//     userName: 'Zhang Min',
//     password: 'Abc123',
//     phone: '18362973120',
//     email: 'ZhangMin19962020@163.com'
// });
// // 将实例保存到数据库中
// user.save()


// 方式二
// create方法创建
// User.create({
//     userName: 'Zhang San',
//     password: 'Abc123',
//     phone: '18362973120',
//     email: 'ZhangSan@163.com'
// }).then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// });

async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('Abc12345', salt);
    const user = await User.create({
        userName: 'ZhangMin',
        email: 'ZhangMin19962020@163.com',
        password: pass,
        phone: '18362973120'
    })
}

module.exports = {
    User
}



