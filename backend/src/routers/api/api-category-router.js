const express = require ("express")
const categoriesApiController = require("../../controllers/apis/categoriesApiController")
const apiCategoryRouter = express.Router()

apiCategoryRouter.get("/count",categoriesApiController.count)

module.exports = apiCategoryRouter