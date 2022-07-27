module.exports = (sequelize, dataTypes) => {
    const alias = "OrderDetail";
    const columns = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        price:{
            type:dataTypes.FLOAT,
            allowNull:false,
        },
        quantity:{
            type:dataTypes.INTEGER,
            allowNull:false
        },
        order_id:{
            type: dataTypes.BIGINT(11)
        },
        product_id:{
            type: dataTypes.BIGINT(11)
        },
    }
    const config = {
        timestamps: false,
    }
    const OrderDetail = sequelize.define(alias, columns, config)

    OrderDetail.associate = function (models) {
        OrderDetail.belongsTo(models.Product, {
            // models.Movie -> Movies es el valor de alias en movie.js
            as: "product",
            foreignKey: "product_id"
        })
        
    }
    return OrderDetail;


}