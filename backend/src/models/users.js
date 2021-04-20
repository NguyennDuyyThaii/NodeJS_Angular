const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
let Schema = mongoose.Schema

let userSchema = new Schema({
    email: { type: String, trim: true },
    password: String,
    verifyToken: String,
    // name: String,
    // local: {
    //     email: { type: String, trim: true },
    //     password: String,
    //     isActive: { type: Boolean, default: false },
    //     verifyToken: String
    // },
    createdAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now }
})

userSchema.statics = {
    createNew(item) {
        return this.create(item)
    },
    findByEmail(email) {
        return this.findOne({ "email": email }).exec()
    },
    findUserById(id) {
        return this.findById({ "_id": id }).exec()
    }
}
userSchema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.password)
    }
}
module.exports = mongoose.model("user", userSchema)