const bookModel = require("./../models/books")

//match(/^[0-9a-fA-F]{24}$/)
let getBook = async(req, res) => {

    let pageSize = +req.query.pagesize
    let currentPage = +req.query.page || 1
    let keyword = req.query.keyword
    let books = await bookModel.find({ name: { $regex: keyword, $options: 'i' } }).skip(pageSize * (currentPage - 1)).limit(pageSize).populate("categories").populate("authors")
    res.json(JSON.parse(JSON.stringify(books)))
}
let getDelete = async(req, res) => {
    await bookModel.removeBook(req.params.id)
        .then(result => {
            //console.log(result)
            res.json({ message: "Post deleted" })
        })
}
let postBook = async(req, res) => {
    let url = req.protocol + "://" + req.get("host");
    if (req.uploadError) {
        console.log(req.uploadError)
    }
    let newBook = await bookModel.createNew(req.body)
    let item = {
        avatar: url + "/src/images/" + req.file.filename
    }
    await bookModel.updateBook(newBook._id, item)
    res.json(newBook)
}

let getEditBook = async(req, res) => {
    let book = await bookModel.findBookById(req.params.id)
    res.json(book)
}
let putEditBook = async(req, res) => {
    if (req.uploadError) {
        console.log(req.uploadError)
    }
    let body = req.body
    let url = req.protocol + "://" + req.get("host");
    let id = req.params.id.match(/^[0-9a-fA-F]{24}$/)
        // console.log(id)
    let item = {
        name: body.name,
        price: body.price,
        des_short: body.des_short,
        des_detail: body.des_detail,
        author_id: body.author_id,
        cate_id: body.cate_id,
        avatar: url + "/src/images/" + req.file.filename
    }
    let updateBook = await bookModel.updateBook(id, item)
        // console.log(updateBook)

    res.json(updateBook)
}
module.exports = {
    getBook: getBook,
    getDelete: getDelete,
    postBook: postBook,
    getEditBook: getEditBook,
    putEditBook: putEditBook
}