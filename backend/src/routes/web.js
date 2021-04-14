const { author, book, category, user, site } = require("./../controllers/index")
const uploadFileMiddleware = require("./../middleware/uploadBook")
const { registerValidation } = require("./../validation/registerValidation")
const express = require("express")
const router = express.Router()
const checkLogin = require("./../middleware/check")

let initRouter = (app) => {

    // author
    router.get('/admin/author', author.getAuthor)
    router.delete('/admin/author/delete/:id', author.getDelete)
    router.post('/admin/author/add', author.postAuthor)
    router.get('/admin/author/edit/:id', author.getEditAuthor)
    router.put('/admin/author/edit/:id', author.putEditAuthor)
        // book
    router.get('/admin/book', book.getBook)
    router.delete('/admin/book/delete/:id', book.getDelete)
    router.post('/admin/book/add', uploadFileMiddleware, book.postBook)
    router.get('/admin/book/edit/:id', book.getEditBook)
    router.put('/admin/book/edit/:id', uploadFileMiddleware, book.putEditBook)
        // category
    router.get('/admin/category', category.getCategory)
    router.delete('/admin/category/delete/:id', category.getDelete)
    router.post('/admin/category/add', category.postCategory)
    router.get('/admin/category/edit/:id', category.getEditCategory)
    router.put('/admin/category/edit/:id', category.putEditCategory)
        // user

    router.post('/register', user.postRegister)
    router.post('/login', user.postLogin)
        // site
    router.get('/', site.getHome)
    router.get('/category/:id', site.getCateBook)
    router.get('/detail/:id', site.getDetail)

    return app.use("/", router)
}

module.exports = initRouter