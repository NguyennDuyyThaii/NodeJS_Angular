const authorModel = require("./../models/authors")
const bookModel = require("./../models/books")
let getAuthor = async(req, res) => {
    await authorModel.listAll().exec(function(err, result) {
        if (err) throw err;
        res.json(result)
    });
}

let getDelete = async(req, res) => {
    // b1. Tìm tất cả sách thuộc danh mục
    await authorModel.removeAuthor(req.params.id)
    await bookModel.remove().where({ "author_id": req.params.id }).exec()
    res.json({ message: "Post deleted" })


}
let postAuthor = async(req, res) => {
    let item = req.body
    let newAuthor = await authorModel.createNew(item)
    res.json(newAuthor)
}
let getEditAuthor = async(req, res) => {
    let author = await authorModel.findAuthorById(req.params.id)
    res.json(author)
}
let putEditAuthor = async(req, res) => {
    let id = req.params.id
    let item = req.body
    let updateAuthor = await authorModel.updateAuthor(id, item)
    res.json(updateAuthor)
}
module.exports = {
    getAuthor: getAuthor,
    getDelete: getDelete,
    postAuthor: postAuthor,
    getEditAuthor: getEditAuthor,
    putEditAuthor: putEditAuthor
}