const bodyParser = require("body-parser")
const initRouter = require("./routes/web")
const connectDB = require("./configs/connectDB")

const express = require("express")
const app = express()

//
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
//
connectDB()
    //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
    // 
initRouter(app)

app.listen(8017, () => {
    console.log("Server is listerning on port 8017")
})