const db = require("../../database/models")

const categoriesApiController = {
    count: async(req,res)=>{

        
        const quantityCategories = await db.Category.count()

        res.status(200).json({
            message:"categorias contadas",
            quantityCategories
        })
    }
}

module.exports = categoriesApiController