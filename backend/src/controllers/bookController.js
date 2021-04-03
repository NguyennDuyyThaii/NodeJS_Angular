const bookModel = require("./../models/books")
    //match(/^[0-9a-fA-F]{24}$/)
let getBook = async(req, res) => {
    let item = await bookModel.listAll()
    item = JSON.parse(JSON.stringify(item))
    console.log(item)
}
module.exports = {
    getBook: getBook
}