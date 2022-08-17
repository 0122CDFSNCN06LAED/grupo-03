function userParaAdministradores(req, res, next) {
    const userLogueado=req.session.userLogueado;
    if (userLogueado) {
        if (userLogueado.categoria == 1) {            
            next();
        }
        else {           
            res.redirect("/user/home")
        };
        
    }

    return res.redirect('/');
}

module.exports = userParaAdministradores;