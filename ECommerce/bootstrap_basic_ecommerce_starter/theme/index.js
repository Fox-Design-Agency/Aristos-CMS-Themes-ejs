

module.exports = app => {
    //Need to check for upgrade folder and if true then =>
    /*
    * This is theme specific, needs to move!!
    */
    // Get product category model
    let Category = require("../upgrade/products/models/productCategory");

    //update to product category
    // Get all product categories to pass to header.ejs
    Category.find(function (err, categories) {
        if (err) {
            console.log(err)
        } else {
            app.locals.categories = categories;
        }
    })

    /*
    * End of theme specific items
    */
    const pages = require("./routes/pages")
    const products = require("./routes/products")
    const cart = require("./routes/cart")
    const users = require("./routes/users")


    app.use("/products", products)
    app.use("/cart", cart)
    app.use("/users", users)
    app.use("/", pages)

    // app.use(function (req, res, next) {
    //     res.status(404).render('index', { title: "Sorry, page not found", content: "nothing" });
    // });

}