const path = require("path");
const express=require("express");
const userRouter = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let imagen=path.join(__dirname, "../../public/img/imgUsers")
    cb(null, imagen)},
  filename: (req, file, cb) => {
      //const fileName =
        //file.fieldname + Date.now() + path.extname(file.originalname);
      //cb(null, fileName);
      //let fieldName = `${Date.now()}_img${path.extname(file.originalname)}`;
      let fieldName = Date.now() + extname(file.originalname)
		  cb(null, fieldName);
    
    
  },
});
  
  const uploadFile = multer({
    storage,
  });

const userController = require("../controllers/users-controller");
const registerValidator = require("../middleware/user-regValidation");

//rutas users
userRouter.get("/login", userController.login);//Logearse

userRouter.get("/register", userController.register);//Registrase
userRouter.post("/processRegister", uploadFile.single('imgUsers'),registerValidator, userController.processRegister);

userRouter.get("/listar", userController.index);//listar
userRouter.get("/detalle/:id", userController.detail);//detalle

userRouter.get("/edit/:id",  userController.edit);
userRouter.delete("/:id", userController.remove);//borrar

userRouter.get("/update/:id", userController.modificar);//modificar
userRouter.put("/:id", registerValidator,  userController.update);//modificar





module.exports = userRouter;