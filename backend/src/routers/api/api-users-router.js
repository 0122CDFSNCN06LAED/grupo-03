const express = require ("express");
const apiUsersRouter = express.Router();
const apiUsersControllers = require ("./../../controllers/apis/usersApiControllers")
apiUsersRouter.get("/", apiUsersControllers.list); 
apiUsersRouter.get("/count", apiUsersControllers.count);
apiUsersRouter.get("/:id", apiUsersControllers.getById);

module.exports = apiUsersRouter