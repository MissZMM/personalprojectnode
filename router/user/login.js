const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    const { email, password } = req.query;
    if (email.trim().length == 0 || password.trim().length == 0) {
        res.status(400);
    }
    let user = await User.findOne({email});
    if (user) {
        console.log(user)
        let isValid  = await bcrypt.compare(password, user.password);
        if (isValid) {
            let content = {email};
            let secretOrPrivateKey="jwt";// 这是加密的key（密钥）
            let token = jwt.sign(content, secretOrPrivateKey, {
                expiresIn: 60*60*1  // 1小时过期
            });
            res.status(200);
            res.set('Authorization', token)
            await res.json({email,userName: user.userName, phone: user.phone})
        } else {
            res.status(400);
            await res.json({message:'用户名或密码错误'});
    }
    } else {
        res.status(400);
        await res.json({mess:'用户名不存在'});
    }
}
