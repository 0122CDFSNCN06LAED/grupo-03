const express = require ("express");
const apiUsersRouter = express.Router();
const apiUsersControllers = require ("./../../controllers/apis/usersApiControllers")
apiUsersRouter.get("/users", apiUsersControllers.list); 

module.exports = apiUsersRouter;