//const path = require("path");
const express = require("express");
const userRouter = express.Router();
//const { check } = require('express-validator');
const uploadFile = require('../middleware/multer');

const userController = require("../controllers/users-controller");
const userLogValidator = require("../middleware/user-logValidation");
const userRegValidator = require("../middleware/user-regValidation");
const userLogueado = require("../middleware/user-logueado");

//rutas users
userRouter.get("/login", userLogValidator, userLogueado, userController.login);//Logearse
userRouter.post("/processLogin", userController.processLogin);

userRouter.get("/register", userController.register);//Registrase
userRouter.post("/processRegister", uploadFile.single('imgUsers'), userRegValidator,
  userController.processRegister);

userRouter.get("/listar", uploadFile.single('imgUsers'),
  userController.index);//listar
  
userRouter.get("/detalle/:id", uploadFile.single('imgUsers'), userController.detail);//detalle
userRouter.get("/home", userController.home)

userRouter.get("/edit/:id", userController.edit);
userRouter.delete("/:id", userController.remove);//borrar

userRouter.get("/update/:id", userController.modificar);//modificar
userRouter.put("/:id", uploadFile.single('imgUsers'),
  userController.update);//modificar

userRouter.get("/logout", userController.logout);//cierra session y cookie


module.exports = userRouter;
