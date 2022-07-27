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
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT(10).UNSIGNED,
            allowNull: false
        },
        weight: {
            type: dataTypes.INTEGER(10),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        category_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    const config = {
        timestamps: false,
        deletedAt: false,
      };
    
      const Product = sequelize.define(alias, columns, config);
      
      Product.associate = function (models) {
        Product.hasOne(models.Category, {
            // models.Movie -> Movies es el valor de alias en movie.js
            as: "category",
            foreignKey: "category_id",
        });

    };
      return Product;
  }
