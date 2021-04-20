const categoryModel = require("./../models/categories")
const bookModel = require("./../models/books")
let getCategory = async(req, res) => {
    //let categories = await categoryModel.listAll()
    await categoryModel.listAll().exec(function(err, result) {
        if (err) throw err;
        res.json(result)
    });

}
let getDelete = async(req, res) => {
    await categoryModel.removeCategory(req.params.id)
    await bookModel.remove().where({ "cate_id": req.params.id }).exec()
    res.json({ message: "Post deleted" })

}
let postCategory = async(req, res) => {
    let item = req.body
    let newAuthor = await categoryModel.createNew(item)
    res.json(newAuthor)
}
let getEditCategory = async(req, res) => {
    let author = await categoryModel.findCategoryById(req.params.id)
    res.json(author)
}
let putEditCategory = async(req, res) => {
    let id = req.params.id
    let item = req.body
    let updateCategory = await categoryModel.updateCategory(id, item)
    res.json(updateCategory)
}
module.exports = {
    getCategory: getCategory,
    getDelete: getDelete,
    postCategory: postCategory,
    getEditCategory: getEditCategory,
    putEditCategory: putEditCategory
}