const { Router } = require("express");
const { route } = require("express/lib/application");
const userRouter = Router();
const path = require('path');
const { body } = require('express-validator');

const userController = require("../controllers/users-controller");
//rutas users		


const validations = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('telefono').notEmpty().withMessage(''),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('password1').notEmpty().withMessage('Tienes que confirmar la contraseña')   

]

userRouter.get("/user/register", userController.create);//nuevo
userRouter.post('/user/register', validations, userController.processRegister);

userRouter.get("/user/:id", userController.remove);//borrar
userRouter.get("/user/:id", userController.update);//modificar
userRouter.get("/user", userController.index);//listar



module.exports = userRouter;