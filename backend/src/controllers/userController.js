const userModel = require("./../models/users")
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken");
let postRegister = async(req, res) => {
    // let errorArr = []
    // let validationErrors = validationResult(req)
    // if (!validationErrors.isEmpty()) {
    //     let errors = Object.values(validationErrors.mapped())
    //     errors.forEach(item => {
    //         errorArr.push(item.msg)
    //     })
    //     console.log(errorArr)
    // }
    // try {

    // } catch (error) {

    // }
    let salt = bcrypt.genSaltSync(7)
    let user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
        verifyToken: ''
    }
    await userModel.createNew(user)
}
let postLogin = async(req, res, next) => {
        let user = await userModel.findOne({ email: req.body.email }).exec()


        if (user) {
            if ((req.body.password)) {
                let token = jwt.sign({ verifyToken: user.verifyToken }, "secret", { expiresIn: '1h' })
                return res.status(200).json(token)
            } else {
                return res.status(500).json({ message: "Không tồn tại tài khoản!" })
            }
        } else {
            return res.status(500).json({ message: "Email chưa được đăng kí!" })
        }

    }
    // let postLogin = async(req, res) => {

//     let user = await userModel.findOne({ "email": req.body.email })
//     let token = jwt.sign({ email: user.email, userId: user._id },
//         "time", { expiresIn: "1h" });
//     res.json({
//         token: token
//     })

// }
module.exports = {
    postRegister: postRegister,
    postLogin: postLogin
}