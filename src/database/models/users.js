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
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        telefono: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
    };
  
    const config = {
      timestamps: false,
      deletedAt: false
    };
  
    const User = sequelize.define(alias, columns, config);
    return User;
}
            