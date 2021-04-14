const categoryModel = require("./../models/categories")
let getCategory = async(req, res) => {
    let categories = await categoryModel.listAll()
    res.json(categories)
}
let getDelete = async(req, res) => {
    await categoryModel.removeCategory(req.params.id)
        .then(result => {
            //console.log(result)
            res.json({ message: "Post deleted" })
        })
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