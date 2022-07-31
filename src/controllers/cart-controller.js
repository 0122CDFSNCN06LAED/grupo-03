const db = require("./../database/models/index")

async function add(req,res){
    const productId = req.body.productId
    const userId =req.body.userId
    const quantity = 1;
const auth = req.session.userLogueado;
const user = db.User.findByPk(userId)
user.getOrder()
    .then(order => {
        console.log(order)
    })

res.send("agregado al carrito")

}
function list(req,res){
    res.send("productos en carrito")
}

module.exports = {
    add,
    list
}