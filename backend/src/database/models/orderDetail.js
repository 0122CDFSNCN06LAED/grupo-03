

module.exports = (sequelize, dataTypes) => {
    const alias = "OrderDetail";
    const columns = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false,
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            type: dataTypes.BIGINT(11)
        },
        product_id: {
            type: dataTypes.BIGINT(11)
        },
    }
    const config = {
        timestamps: false,
        tableName: "order_details"
    }
    const OrderDetail = sequelize.define(alias, columns, config)

    OrderDetail.associate = function (models) {
        OrderDetail.belongsTo(models.Product, {
           foreignKey: "product_id"
        })
        
        OrderDetail.belongsTo(models.Order,{
            foreignKey: "order_id"
        })
    }




return OrderDetail;

}