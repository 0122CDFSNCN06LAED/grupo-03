const path = require("path");
const express=require("express");
const userRouter = express.Router();
const multer = require("multer");
const { body } = require('express-validator');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let imagen=path.join(__dirname, "../../public/img/imgUsers")
    cb(null, imagen)},
  filename: (req, file, cb) => {
      let fieldName = Date.now() + file.originalname;
		  cb(null, fieldName); 
  },
});
  
  const uploadFile = multer({
    storage,
  });

const userController = require("../controllers/users-controller");
const userValidator = require("../middleware/user-regValidation");
const userLogueado = require("../middleware/user-logueado");
//rutas users
userRouter.get("/login", userLogueado, userController.login);//Logearse
userRouter.post("/processLogin", userController.processLogin);

userRouter.get("/register", userController.register);//Registrase
userRouter.post("/processRegister", uploadFile.single('imgUsers'),userValidator, 
  userController.processRegister);

userRouter.get("/listar", uploadFile.single('imgUsers'), userController.index);//listar
userRouter.get("/detalle/:id", uploadFile.single('imgUsers'), userController.detail);//detalle

userRouter.get("/edit/:id",  userController.edit);
userRouter.delete("/:id", userController.remove);//borrar

userRouter.get("/update/:id", userController.modificar);//modificar
userRouter.put("/:id", uploadFile.single('imgUsers'),userController.update);//modificar

module.exports = userRouter;
