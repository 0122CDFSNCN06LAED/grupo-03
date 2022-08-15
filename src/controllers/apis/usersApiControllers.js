const db = require ("./../../database/models/index");

async function list(req,res){
    
    try{
        let users = []

        users = await db.User.findAll({ offset: (page-1) * itemsPerPage, limit: itemsPerPage });
        const total = users.length
        
        res.status(200).json({
            message:"ok", 
            users, 
            page,
        });

        return

    }catch(error){
        res.status(401).json({
            message: "error al cargar los usuarios desde la base de datos",
            error
        })
    }
}
    
const count = async (req,res) => {
    const quantityUsers = (await db.User.findAll()).length
    res.status(200).json({
        message:"ok",
        quantityUsers
    })
} 

const getById = async(req,res)=>{
    const user = await db.User.findByPk(req.params.id)
    res.status(200).json ({
        message:"userFound",
        user
    })
} 

const usersApiController = {
    list,
    count,
    getById
}

module.exports = usersApiController