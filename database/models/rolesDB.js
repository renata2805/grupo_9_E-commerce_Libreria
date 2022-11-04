const { DATEONLY } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol'; 
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
       
    };
    let config = {
        tableName: "roles",
        timestamps: false,
        underscore:true,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Rol = sequelize.define(alias,cols,config);
    Rol.associate = function (models) {
        Rol.hasMany(models.User, { 
            as: "users",
            foreignKey: "role_id"
        })
};
    return Rol
};