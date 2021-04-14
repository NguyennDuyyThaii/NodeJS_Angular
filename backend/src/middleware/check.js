const jwt = require("jsonwebtoken")

let checkLogin = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, "time")
        next()
    } catch (error) {
        res.json({ message: "That Bai" })
    }
}
module.exports = checkLogin