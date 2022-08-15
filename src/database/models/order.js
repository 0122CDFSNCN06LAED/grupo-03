module.exports = (sequelize, dataTypes) => {
    const alias = "Order";
    const columns = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        user_id:{
            type: dataTypes.BIGINT(11)
        }
    }
    const config = {
        timestamps: false,
        tableName:"orders"
    }
    const Order = sequelize.define(alias, columns, config)

    Order.associate = function (models) {
        Order.hasMany(models.OrderDetail, {
            foreignKey: "order_id"
        })
    }

    return Order;


}

