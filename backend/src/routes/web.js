const { author, book, category, user } = require("./../controllers/index")

const express = require("express")
const router = express.Router()

let initRouter = (app) => {

    // author
    router.get('/admin/author', author.getAuthor)
        // book
    router.get('/admin/book', book.getBook)
        // category
    router.get('/admin/category', category.getCategory)
        // user

    return app.use("/", router)
}

module.exports = initRouter