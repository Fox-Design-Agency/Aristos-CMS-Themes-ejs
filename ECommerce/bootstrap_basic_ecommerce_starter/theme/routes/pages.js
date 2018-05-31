const express = require("express")
const router = express.Router();
// GET page model
const Page = require("../../../includes/models/page")
//GET blogs model
const Blog = require("../../upgrade/blog/models/blog")
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
    if (slug == "blog") {
        Page.findOne({ slug: slug }, function (err, page) {
            Blog.find({}, function (err, blogs) {
                if (err) {
                    console.log(err);
                }

                if (!page) {
                    res.redirect("/")
                } else {
                    res.render("blog", {
                        title: page.title,
                        content: page.content,
                        keywords: page.keywords,
                        description: page.description,
                        author: page.author,
                        blogs: blogs
                    })
                }
            })
        })
    } else {
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
    }
})

/*
* GET a blog
*/
router.get("/blog/:slug", function (req, res) {
    let slug = req.params.slug;
    Blog.findOne({ slug: slug }, function (err, blog) {
        if (err) {
            console.log(err);
        }
        if (!blog) {
            res.redirect("/")
        } else {
            res.render("blogpage", {
                title: blog.title,
                content: blog.content,
                keywords: blog.keywords,
                description: blog.description,
                author: blog.author
            })
        }
    })

})
//Exports
module.exports = router;