const authorController = require("./authorController")
const bookController = require("./bookController")
const userController = require("./userController")
const categoryController = require("./categoryController")

let author = authorController
let book = bookController
let user = userController
let category = categoryController

module.exports = {
    author: author,
    book: book,
    user: user,
    category: category
}