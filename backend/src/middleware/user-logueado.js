function userLogueado(req, res, next) {
	if (req.session.userLogueado) {
		return res.redirect('/');
	}
	next();
}

module.exports = userLogueado;