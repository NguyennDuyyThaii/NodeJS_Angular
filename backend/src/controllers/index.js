const authorController = require("./authorController")
const bookController = require("./bookController")
const userController = require("./userController")
const categoryController = require("./categoryController")
const siteController = require("./siteController")
const passportController = require("./passportController")
let author = authorController
let book = bookController
let user = userController
let category = categoryController
let site = siteController
let passport = passportController
module.exports = {
    author: author,
    book: book,
    user: user,
    category: category,
    site: site,
    passport: passport
}