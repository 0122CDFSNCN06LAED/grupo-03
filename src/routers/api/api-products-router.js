const express = require ("express");
const apiProductsRouter = express.Router();
const apiProductsControllers = require ("./../../controllers/apis/productsApiControllers")
apiProductsRouter.get("/", apiProductsControllers.list); 

module.exports = apiProductsRouter;