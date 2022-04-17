const express=require("express");
const productController = require("../controllers/product-controller");
const productRouter = express.Router();

//rutas productos
productRouter.get("/product", productController.create);//nuevo		
productRouter.get("/product/:id", productController.remove);//borrar
productRouter.get("/product/:id", productController.update);//modificar
productRouter.get("/product", productController.index);//listar
productRouter.get("/product/:id", productController.mostrar);//listar un solo producto



module.exports = productRouter;