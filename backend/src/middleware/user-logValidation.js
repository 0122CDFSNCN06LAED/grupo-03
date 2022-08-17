const { check } = require("express-validator");

module.exports = [

	check('email')
		.notEmpty()
		.withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail()
		.withMessage('Debes escribir un formato de correo válido')
		.isLength({ min: 8 })
		.withMessage('Tienes que tener mas de 8 letras'),
	check('password')
		.notEmpty()
		.withMessage('Tienes que escribir una contraseña')
		.isLength({ min: 8, })
		.withMessage('Tienes que tener al menos de 8 caracteres'),
];