module.exports = (sequelize, dataTypes) => {
    const alias = "Product";
    const columns = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT.UNSIGNED,
            allowNull: false
        },
        weight: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
    };
    const config = {
        timestamps: false,
        deletedAt: false,
        tableName: "product",
    };

    const Product = sequelize.define(alias, columns, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            // models.Movie -> Movies es el valor de alias en movie.js
            as: "category",
            foreignKey: "category_id",
            onDelete: "cascade",
        });
    };
    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            // models.Movie -> Movies es el valor de alias en movie.js
            as: "category",
            foreignKey: "category_id",
        });

    };

    return Product;
};
