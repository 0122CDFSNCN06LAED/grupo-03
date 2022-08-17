const db = require ("../../database/models/index");

async function list(req,res){
    
    try{
        let products = []
        
        products = await db.Product.findAll({ include: "category" });
        const total = products.length
        const productsMapped = products.map(product =>(
           {
                id:product.id, 
                name: product.name,
                price: product.price,
                weight: product.weight,
                description: product.description,
                category: product.category.name,
                image: product.image,
                detalle: "/products/"+product.id,
            }
        ))
        res.status(200).json({
            message:"ok",
            products:productsMapped, 
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

const count = async (req,res) => {
    const quantityProducts = await db.Product.count()
    res.status(200).json({
        message:"ok",
        quantityProducts
    })
} 

const getById = async(req,res)=>{
    const producto = await db.Product.findByPk(req.params.id,{
        include:"category"
    })
    res.status(200).json ({
        message:"userFound",
        producto
    })
} 

const productsApiController = {
    list,
    count,
    getById
}

module.exports = productsApiController