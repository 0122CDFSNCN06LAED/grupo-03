const db = require ("./../../database/models/index");

async function list(req,res){
    
    try{
        let users = []

        users = await db.User.findAll();
        const count = users.length
        const usersMaped= users.map(user => ({
            id: user.id, 
            nombre: user.nombre,
            email: user.email,
            telefono:user.telefono,
            imagen: user.imagen,
            detalle:"/users/"+user.id
        }))

        res.status(200).json({
            message:"ok", 
            users: usersMaped, 
            count,
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
    const quantityUsers = await db.User.count()
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