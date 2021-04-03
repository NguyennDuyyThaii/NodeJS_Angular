const mongoose = require("mongoose");

let Schema = mongoose.Schema

let categorySchema = new Schema({
    name: String,
    createdAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: Date.now }
})
categorySchema.statics = {
    createNew(item) {
        return this.create(item)
    },
    listAll() {
        return this.find()
    }
}

module.exports = mongoose.model("category", categorySchema)