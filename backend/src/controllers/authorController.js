const authorModel = require("./../models/authors")
let getAuthor = async(req, res) => {
    let item = {
        name: "Nguyen Duy Thai"
    }
    await authorModel.createNew(item)
}
module.exports = {
    getAuthor: getAuthor
}