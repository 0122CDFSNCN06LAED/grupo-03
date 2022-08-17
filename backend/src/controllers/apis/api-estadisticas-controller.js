const db = require("../../database/models")

const estadisticasApiContoller = {
    getQuantities: async (req,res)=>{
        
        const quantityCategories = await db.Category.count()
        const quantityProducts = await db.Product.count()
        const quantityUsers = await db.User.count()

        res.status(200).json({
            message: "OK",
            quantityCategories,
            quantityProducts,
            quantityUsers,
        })
    }
}

module.exports = estadisticasApiContoller