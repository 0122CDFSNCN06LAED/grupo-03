const { check } = require("express-validator");

module.exports = [

	check('name')
		.notEmpty()
		.withMessage('Tienes que escribir un nombre')
		.isLength({ min: 2, })
		.withMessage('Tienes que tener mas de 3 letras'),
	check('price')
		.notEmpty()
		.withMessage('Tienes poner un precio'),
	check('weight')
		.notEmpty()
		.withMessage('Tienes que el contenido'),
	check('description')
		.notEmpty()
		.withMessage('Tienes que escribir una descripcion'),
	check('category')
		.notEmpty()
		.withMessage('Tienes que definir una categoria'),
    check('stock')
		.notEmpty()
		.withMessage('Tienes que establecer el stock inicial'),  
	//Deberá ser un archivo válido (JPG, JPEG, PNG, GIF).	
];