const userLogueado = require("./user-logueado");
const db = require("./../database/models/index");

async function userLogMidVista(req, res, next) {
    res.locals.userLogueado = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = "";

    if (emailInCookie) {
        userFromCookie = await db.User.findOne({
            where: { email: emailInCookie }
        });
        if (userFromCookie) {
            req.session.userLogueado = userFromCookie;
        };
    };

    if (req.session.userLogueado) {
        res.locals.userLogueado = true;
        res.locals.userLogueado = req.session.userLogueado;
    };

    next()
}

module.exports = userLogMidVista;