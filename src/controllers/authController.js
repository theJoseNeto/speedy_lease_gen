const User = require("../models/User");
const bcryptjs = require("bcryptjs");


module.exports = {
    login: async (req, res) => { 
        res.render("auth/login");
    },

    home: async (req, res) => {

        req.session.name = "test";
        res.redirect('/home') 
    },

    authenticate: async (req, res) => {
        try {

            const { name, password } = req.body;
            const user = User.findOne({ where: { name: req.body.name } });
            const isValidPassword = await bcryptjs.compare(password, user.password);

            if (!isValidPassword) {

                console.log("teste")
                throw new Error();

            }
            else console.log("Foi, maluco doido")
        } catch (error) {
            return res.render('auth/login');
        }

    }
}