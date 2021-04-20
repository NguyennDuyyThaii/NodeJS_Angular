const categoryModel = require("./../models/categories")
const bookModel = require("./../models/books")
let getHome = async(req, res) => {
    let category = await categoryModel.listAll()
    let keyword = req.query.keyword
    let pageSize = +req.query.pagesize
    let currentPage = +req.query.page || 1
    let book = await bookModel.find({ name: { "$regex": new RegExp(keyword, "i") } }).skip(pageSize * (currentPage - 1)).limit(pageSize).populate("categories").populate("authors")
    res.json({
        book: book,
        category: category
    })
}
let getCateBook = async(req, res) => {
    let id = req.params.id
    let book = await bookModel.find().where({ "cate_id": id }).populate("categories").populate("authors").exec()
    res.json(book)
}
let getDetail = async(req, res) => {
    let id = req.params.id.match(/^[0-9a-fA-F]{24}$/)
    let detail = await bookModel.findById(id).populate("categories").populate("authors").exec()

    let book = await bookModel.find().where({
        $and: [
            { "cate_id": detail.cate_id },
            { "_id": { $nin: detail._id } }
        ]
    }).populate("categories").populate("authors").exec()

    res.json({
        detail: detail,
        book: book
    })
}
module.exports = {
    getHome: getHome,
    getCateBook: getCateBook,
    getDetail: getDetail
}