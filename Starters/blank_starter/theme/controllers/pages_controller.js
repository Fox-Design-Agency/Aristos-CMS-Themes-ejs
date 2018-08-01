// Page model queries
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");

module.exports = {
  home(req, res, next) {
    const HomePage = FindPageWithParam({ slug: "home" });
    HomePage.then(page => {
      if (page.length < 1) {
        res.render("../views/index", {
          title: "",
          content: "",
          keywords: "",
          description: "",
          author: ""
        });
      } else {
        res.render(`${page[0].template}`, {
          title: page[0].title,
          content: page[0].content,
          keywords: page[0].keywords,
          description: page[0].description,
          author: page[0].author
        });
      }
    });
  }, // end of home function

  anyPage(req, res, next) {
    let slug = req.params.slug;
    const AnyPage = FindPageWithParam({ slug: slug });
    AnyPage.then(page => {
      if (page.length < 1) {
        res.redirect("/");
      } else {
        if (typeof page[0].template !== "undefined") {
          res.render(`${page[0].template}`, {
            title: page[0].title,
            content: page[0].content,
            keywords: page[0].keywords,
            description: page[0].description,
            author: page[0].author
          });
        } else {
          res.render("index"),
            {
              title: page[0].title,
              content: page[0].content,
              keywords: page[0].keywords,
              description: page[0].description,
              author: page[0].author
            };
        }
      }
    });
  } // end of any page function
};
