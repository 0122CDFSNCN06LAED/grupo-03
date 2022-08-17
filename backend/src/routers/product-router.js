const express=require("express");
const productController = require("../controllers/product-controller");
const productRouter = express.Router();
const productValidator = require("../middleware/product-Validation");
const uploadFile = require('../middleware/multerProd');

//rutas productos
productRouter.get("/create", productController.create);//nuevo	
productRouter.post("/newProduct", uploadFile.single("prodImg"), productValidator,
    productController.newProduct);//nuevo

productRouter.get("/index", productController.index);//listar
	
productRouter.get("/detalle/:id", uploadFile.single("prodImg"), 
    productController.detail);//Detalla 1 producto
productRouter.get("/update/:id", productController.modificar);//modificar
productRouter.put("/:id", uploadFile.single("prodImg"), 
  productController.update);//modificar

productRouter.get("/edit/:id", productController.edit);//listar un solo producto
productRouter.delete("/:id", productController.remove);//borrar

productRouter.get("/home", productController.home)



module.exports = productRouter;