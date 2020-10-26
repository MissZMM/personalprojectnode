const { User } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (req, res) => {
    const { userName, email, phone, password } = req.query;
    const check = await User.findOne({email});
    if (check) {
        res.statusCode = 400;
        await res.json({message: '用户已存在'});
    } else {
        // 创建用户
        const salt = await bcrypt.genSalt(10);
        const pass = await bcrypt.hash(password, salt);
        const user = await User.create({
            userName,
            email,
            password: pass,
            phone
        })
        await res.json({status: 200, message: 'ok'})
    }

}
