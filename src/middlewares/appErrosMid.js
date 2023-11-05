exports.errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Verifique se digitou email e senha corretos"

    if (statusCode >= 500) {
        console.error(err);
        message = "Verifique se digitou email e senha corretos";

    }

    res.status(statusCode).render("register.ejs", { errorMessage: message });



}