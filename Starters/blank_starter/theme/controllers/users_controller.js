const passport = require("passport");

module.exports = {
  register(req, res, next) {
    res.render("users/register", {
      title: "Register",
      author: "",
      description: "",
      keywords: "",
      name: "",
      username: "",
      email: ""
    });
  }, // end of register function

  login(req, res, next) {
    if (res.locals.user) {
      res.redirect("/");
    } else {
      res.render("users/login", {
        title: "Log in",
        author: "",
        description: "",
        keywords: ""
      });
    }
  }, // end of login function

  processLogin(req, res, next) {
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/users/login",
      failureFlash: true
    })(req, res, next);
  }, // end of process login function

  logout(req, res, next) {
    req.logout();
    req.flash("success_msg", "You are logged out!");
    res.redirect("/users/login");
  } //end of logout function
};
