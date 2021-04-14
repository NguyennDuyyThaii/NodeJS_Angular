const mongoose = require('mongoose');

let Schema = mongoose.Schema

let userSchema = new Schema({
    email: { type: String, trim: true },
    password: String,
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
    }
}
module.exports = mongoose.model("user", userSchema)