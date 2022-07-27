module.exports = (sequelize, dataTypes) => {
    const alias = "Category";
    const columns = {
        id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false,
        },
        description:{
            type: dataTypes.TEXT
        }
    }
    const config = {
        timestamps: false,
    }
    const Category = sequelize.define(alias, columns, config)

    
    
    return Category;


}

