const db = require("./../database/models/index")

async function add(req, res) {
    const productId = req.body.productId
    const userId = req.session.userLogueado.id
    const quantity = req.body.newQuantity;

    const user = await db.User.findByPk(userId, {
        include: {
            model: db.Order
        }
    })

    let orderId
    if (!user.Order) {
        const newOrder = await db.Order.create({ user_id: user.id })
        orderId = newOrder.id
    }
    else {
        orderId = user.Order.id
    }

    const product = await db.Product.findByPk(productId)
    await db.OrderDetail.create({
        order_id: orderId,
        product_id: productId,
        quantity,
        price: product.price
    })

    res.redirect("/carrito")
}
async function list(req, res) {
    try {
        const userLogueado = req.session.userLogueado
        
        const user = await db.User.findByPk(userLogueado.id, {
            include: {
                model: db.Order,
                include: {
                    model: db.OrderDetail,
                        include: {
                            model: db.Product
                        }
                    }
                }
            });

        const products = await db.Product.findAll();

        
        let totalPrice = 0;
        user.Order.OrderDetails
            .forEach(orderdetailt => {
                totalPrice += orderdetailt.price * orderdetailt.quantity
        });
        
        res.render("carrito", { user, products, totalPrice });
    }
    
    catch (error) {
        res.send(error)
    }
}

async function remove(req, res)  {
    //const delId = req.params.id;
    await db.Order.destroy({ where: { force: true }})
    await db.OrderDetail.destroy({ where: { force: true }})
    res.redirect("/");
}

async function modifyQuantity(req, res) {
    try {
        const OrderDetailId = req.body.OrderDetailId
        const newQuantity = req.body.newQuantity

        await db.OrderDetail.update({ quantity: newQuantity }, {
            where: {
                id: OrderDetailId
            }
        })
        res.redirect("/carrito")
    }
    catch (error) {
        res.redirect("/")
    }
    
}
async function buy(req,res){
    try {
        const userLogueado = req.session.userLogueado
        //console.log(userLogueado)
        const user = await db.User.findByPk(userLogueado.id, {
            include: {
                model: db.Order,
                include: {
                    model: db.OrderDetail,
                    include: {
                        model: db.Product
                    }
                }
            }
        })
        console.log("proceso de compra realizado")
        user.Order.OrderDetails.forEach(async (orderdetail)=>{
            await db.OrderDetail.destroy({
                where:{
                    id:orderdetail.id
                }
            })
        })
        res.redirect("/carrito")
    } catch (error) {
        res.redirect("/")
    }
}

module.exports = {
    add,
    list,
    modifyQuantity,
    buy

}