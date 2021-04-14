const bodyParser = require("body-parser")
const initRouter = require("./routes/web")
const connectDB = require("./configs/connectDB")
const path = require("path")

const http = require("http")
const express = require("express")
const app = express()
const server = http.createServer(app)

app.use("/src/images", express.static(("src/images")))
    //
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});
//
connectDB()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


initRouter(app)

server.listen(8017, () => {
    console.log("Server is listerning on port 8017")
})