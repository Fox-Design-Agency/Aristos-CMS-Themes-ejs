const express = require("express")
const router = express.Router();
// GET page model
const Page = require("../../../includes/models/page")
/*
* GET /
*/

router.get("/", function (req, res) {
    Page.findOne({ slug: "home" }, function (err, page) {
        if (err) {
            console.log(err);
        }
        res.render("index", {
            title: page.title,
            content: page.content,
            keywords: page.keywords,
            description: page.description,
            author: page.author
        })

    })
})

/*
* GET a page
*/

router.get("/:slug", function (req, res) {
    let slug = req.params.slug;
    Page.findOne({ slug: slug }, function (err, page) {
        if (err) {
            console.log(err);
        }

        if (!page) {
            res.redirect("/")
        } else {
            res.render("index", {
                title: page.title,
                content: page.content,
                keywords: page.keywords,
                description: page.description,
                author: page.author
            })
        }
    })
})


//Exports
module.exports = router;