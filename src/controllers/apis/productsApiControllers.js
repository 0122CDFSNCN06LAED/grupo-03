const db = require ("../../database/models/index");

async function list(req,res){
    
    try{
        let products = []
        
        products = await db.Product.findAll();
        const total = products.length
        
        res.status(200).json({
            message:"ok",
            products, 
            total,
        });

        return;

    }catch(error){
        res.status(401).json({
            message: 'error al cargar productos',
            error
        })
    }
}


const productsApiController = {
    list
}

module.exports = productsApiController