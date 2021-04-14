const { check } = require("express-validator")

let registerValidation = [
    check("email", "Email không đúng định dạng, chỉ chấp nhập @gmail.com!")
    .isEmail().trim(),
    check("password", "Mật khẩu phải có ít nhất 8 kí tự bao gồm chữ thường, chữ hoa, kí tự đặc biệt và số!")
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("re_password", "Nhập lại mật khẩu không đúng, kiểm tra lại!")
    .custom((value, { req }) => {
        return value === req.body.password
    })
]

module.exports = {
    registerValidation: registerValidation
}