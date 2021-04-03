const categoryModel = require("./../models/categories")
let getCategory = async(req, res) => {
    let item = {
        name: "Toan"
    }
    await categoryModel.createNew(item)
}
module.exports = {
    getCategory: getCategory
}