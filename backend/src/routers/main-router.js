const { Router } = require("express");
const { route } = require("express/lib/application");
const mainRouter = Router();
const path = require("path");

const mainController = require("../controllers/main-controller");

//rutas main
mainRouter.get("/", mainController.home);

mainRouter.get("/productDetail", mainController.productDetail);









module.exports = mainRouter;