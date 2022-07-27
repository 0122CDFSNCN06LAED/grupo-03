const db = require ("./../../database/models/index");

async function list(req,res){
    const users = await db.User.findAll()

    res.status(200).json({message:"ok", users})
}


const usersApiController = {
    list
}

module.exports = usersApiController