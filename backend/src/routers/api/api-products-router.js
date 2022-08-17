const express = require ("express");
const apiProductsRouter = express.Router();
const apiProductsControllers = require ("./../../controllers/apis/productsApiControllers")

apiProductsRouter.get("/", apiProductsControllers.list); 
apiProductsRouter.get("/count", apiProductsControllers.count); 
apiProductsRouter.get("/:id", apiProductsControllers.getById);

module.exports = apiProductsRouter;