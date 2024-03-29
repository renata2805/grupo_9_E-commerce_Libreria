// const { DATEONLY } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'UserDB'; 
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        tel: {
            type: dataTypes.INT(20),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        role_id: dataTypes.INT,
    };
    // let config = {
    //     tableName: "users",
    //     timestamps: false,
    //     underscore:true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    // }
    const UserDB = sequelize.define(alias,cols);
    UserDB.associate = function (models) {
        UserDB.belongsTo(models.Rol, { 
            as: "roles",
            foreignKey: "role_id"
        })
};
    return UserDB
};