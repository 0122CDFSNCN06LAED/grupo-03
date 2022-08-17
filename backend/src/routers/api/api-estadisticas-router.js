const express = require("express")
const estadisticasApiContoller = require("../../controllers/apis/api-estadisticas-controller")
const estadisticasApiRouter = express.Router()

estadisticasApiRouter.get("/quantities", estadisticasApiContoller.getQuantities)

module.exports = estadisticasApiRouter