const multer = require("multer")
const util = require("util")

let storage = multer.diskStorage({
    destination: (req, res, callback) => {
        let dir = "src/images/"
        callback(null, dir)
    },
    filename: (req, file, callback) => {
        let math = ["image/png", "image/jpeg", "image/jpg"]
        if (math.indexOf(file.mimetype) === -1) {
            return callback("Ảnh không đúng định dạng, chỉ chấp nhận các định dạng jpg, png, jpeg", null)
        }

        let filename = `${Date.now()}-${file.originalname}`
        callback(null, filename)
    }
})

let uploadFile = multer({
        storage: storage
    }).single("avatar")
    // util.promisify để bên controller or service có thể dùng async-await
let uploadFileMiddleware = util.promisify(uploadFile)

module.exports = uploadFileMiddleware