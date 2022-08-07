const { check } = require("express-validator");

module.exports = [

	check('nombre')
		.notEmpty()
		.withMessage('Tienes que escribir un nombre')
		.isLength({ min: 3, })
		.withMessage('Tienes que tener mas de 3 letras'),
	check('email')
		.notEmpty()
		.withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail()
		.withMessage('Ingresar un email válido')
		.isLength({ min: 8 })
		.withMessage('Tienes que tener mas de 8 letras'),
	check('telefono')
		.notEmpty()
		.withMessage('Tienes que anotar un numero de telefono')
		.isLength({ min: 8, })
		.withMessage('Tienes que tener mas de 6 numeros'),
	check('password')
		.notEmpty()
		.withMessage('Tienes que escribir una contraseña')
		.isLength({ min: 8, })
		.withMessage('Tienes que tener al menos de 8 caracteres'),
	check('passwordConf')
		.notEmpty()
		.withMessage('Tienes que confirmar la contraseña'),
	//Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).	
];