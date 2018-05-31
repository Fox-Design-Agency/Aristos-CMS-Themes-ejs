module.exports = app => {
    const pages = require("./routes/pages")
    const users = require("./routes/users")

    app.use("/users", users)
    app.use("/", pages)
}