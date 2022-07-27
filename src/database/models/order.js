module.exports = (sequelize, dataTypes) => {
    const alias = "Order";
    const columns = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        order_address: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        user_id:{
            type: dataTypes.BIGINT(11)
        }
    }
    const config = {
        timestamps: false,
    }
    const Order = sequelize.define(alias, columns, config)

    Order.associate = function (models) {
        Order.belongsTo(models.Category, {
            // models.Movie -> Movies es el valor de alias en movie.js
            as: "order",
            foreignKey: "user_id"
        })
        Order.hasMany(models.OrderDetail, {
            as: "order_details", foreignKey: "order_id"
        })
    }
    return Order;


}

