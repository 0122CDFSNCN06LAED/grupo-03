module.exports = (sequelize, dataTypes) => {
    const alias = "User";
    const columns = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true

        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false, 
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        telefono: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        categoria: {
            type: dataTypes.BIGINT(10).UNSIGNED,  //1-administrador  2-usuario              
                allowNull: false,                        
        },
    };
  
    const config = {
      timestamps: false,
      deletedAt: false,
      tableName:"users"
    };
    const User = sequelize.define(alias, columns, config);

    User.associate = function (models) {
        User.hasOne(models.Order, {
            foreignKey: "user_id",
        });
    }  
  
    return User;
}
            