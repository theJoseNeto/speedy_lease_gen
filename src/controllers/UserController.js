const { EmailValidator } = require('clean-email-validator')
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const flash = require('express-flash');
module.exports = {

    store: async (req, res) => {
        try {
            const { name, email, password } = req.body;

            const isValidEmail = EmailValidator.validate(email);
            if (name.length < 3) {
                console.log("nome")
                req.flash("error", "- Seu nome de usuário é curto demais"); }
                
            if (!isValidEmail) {
                console.log("email")
                req.flash("error", "- Seu email não tem um formato válido")}
                
            if (password.length < 8){
              console.log("senha")  
                req.flash("error", "- Você precisa de uma senha com mais de 8 caracteres")}
                

            const { error } = req.flash();

            if (error.length > 0) {
                return res.render('auth/register', {error})                

            } else {
                console.log("caiu no else")
            }
            // const hashedPassword = await bcrypt.hash(password, 10);
            // await User.create({ name, email, password: hashedPassword });

        } catch (error) {
            if (error.name === "SequelizeUniqueConstraintError") {
                req.flash("error", "Este usuário já está cadastrado");
                return res.redirect("auth/login");
            }
        }
    },



    login: async (req, res) => {
        const { name, password } = req.body;
        const user = await User.findOne({ where: { name } });

        if (user) {
            bcrypt.compare(password, user.password, (err, correctPassword) => {
                console.log(err, correctPassword)
                res.send("Logado")


            });
        }


    },



    updateUser: async (req, res) => {
        const { userId } = req.params;
        const { name, email, password } = req.body;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.render('notFound');
        }

    }



}   