module.exports = app => {
    const pages = require("./routes/pages")

    app.use("/", pages)
}