

module.exports = app => {
    const pages = require("./routes/pages")
    const products = require("./routes/products")
    const cart = require("./routes/cart")
    const users = require("./routes/users")


    app.use("/products", products)
    app.use("/cart", cart)
    app.use("/users", users)
    app.use("/", pages)

}