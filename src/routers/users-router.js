const path = require("path");
const express=require("express");
const userRouter = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img/imgUsers"),
    filename: (req, file, cb) => {
      const fileName =
        file.fieldname + Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    },
  });
  
  const upload = multer({
    storage,
  });



const userController = require("../controllers/users-controller");
const registerValidator = require("../middleware/user-regValidation");

//rutas users
userRouter.get("/login", userController.login);//Logearse

userRouter.get("/register", userController.register);//Registrase
userRouter.post("/processRegister", registerValidator, userController.processRegister);

userRouter.get("/listar", userController.index);//listar
userRouter.get("/detalle/:id", userController.detail);//detalle

userRouter.get("/edit/:id",  userController.edit);
userRouter.delete("/:id", userController.remove);//borrar

userRouter.get("/update/:id", userController.modificar);//modificar
userRouter.put("/:id", registerValidator,  userController.update);//modificar




module.exports = userRouter;