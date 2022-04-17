const { Router } = require("express");
const { route } = require("express/lib/application");
const userRouter = Router();

const userController = require("../controllers/product-controller");
//rutas users		
userRouter.get("/user", userController.create);//nuevo		
userRouter.get("/user/:id", userController.remove);//borrar
userRouter.get("/user/:id", userController.update);//modificar
userRouter.get("/user", userController.index);//listar



module.exports = userRouter;