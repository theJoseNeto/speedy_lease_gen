const { Router } = require("express");
const { store, login } = require("../controllers/UserController");
const routes = Router();


routes.get("/", (req, res) => {
    const errors = req.flash("error")
    res.render("auth/login", { errors })
});

routes.get("/register", (req, res) => {
    const errors = req.flash("error")
    res.render("auth/register", { errors })
});

routes.post("/home", login);
routes.post("/register", store);



module.exports = routes; 