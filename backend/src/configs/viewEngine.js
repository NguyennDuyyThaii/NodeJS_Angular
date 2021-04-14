const express = require("express");
const ejsExtend = require("express-ejs-extend")
const path = require("path")
let configViewEngine = (app) => {
    app.use(express.static("src/public"));
    app.engine("ejs", ejsExtend);
    app.set("view engine", "ejs");
    app.set("views", path.join(__dirname, "../views"))
}
module.exports = configViewEngine