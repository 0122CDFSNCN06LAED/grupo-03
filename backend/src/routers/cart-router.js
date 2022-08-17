const express = require("express");
const cartRouter = express.Router();
const cartController = require("./../controllers/cart-controller")

cartRouter.get("/",cartController.list)
cartRouter.post("/add", cartController.add)
cartRouter.post("/modifiquantity", cartController.modifyQuantity)
cartRouter.post("/buy", cartController.buy)
//cartRouter.post("/createOrder", cartController.createOrder)
module.exports =cartRouter;
