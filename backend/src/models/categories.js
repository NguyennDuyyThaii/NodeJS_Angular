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
        return this.aggregate([{
                $lookup: {
                    from: 'books',
                    localField: "_id",
                    foreignField: "cate_id",
                    as: 'books'
                }
            },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    number_of_books: { $size: "$books" }
                }
            }
        ])
    },
    removeCategory(id) {
        return this.findByIdAndRemove({ "_id": id }).exec()
    },
    findCategoryById(id) {
        return this.findByIdAndUpdate({ "_id": id }).exec()
    },
    updateCategory(id, item) {
        return this.updateOne({ "_id": id }, item).exec()
    }
}

module.exports = mongoose.model("category", categorySchema)