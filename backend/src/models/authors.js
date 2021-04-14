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
    },
    removeAuthor(id) {
        return this.findByIdAndRemove({ "_id": id }).exec()
    },
    findAuthorById(id) {
        return this.findByIdAndUpdate({ "_id": id }).exec()
    },
    updateAuthor(id, item) {
        return this.updateOne({ "_id": id }, item).exec()
    }
}
module.exports = mongoose.model("author", authorSchema)