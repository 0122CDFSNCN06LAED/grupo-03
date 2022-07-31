const express = require("express");
const cartRouter = express.Router();
const cartController = require("./../controllers/cart-controller")

cartRouter.get("/carrito",cartController.list)
cartRouter.post("/add", cartController.add)

module.exports =cartRouter;
