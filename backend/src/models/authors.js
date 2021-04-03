const mongoose = require("mongoose")

let Schema = mongoose.Schema

let authorSchema = new Schema({
    name: String,
    createaAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now }
})
authorSchema.statics = {
    createNew(item) {
        return this.create(item)
    },
    listAll() {
        return this.find()
    }
}
module.exports = mongoose.model("author", authorSchema)