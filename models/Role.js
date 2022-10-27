const { DATEONLY } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Role'; 
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        role: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "roles",
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Role = sequelize.define(alias,cols,config);
    Role.associate = function (models) {
        Role.belongsToMany(models.User, { 
            as: "users",
            foreignKey: "role_id"
        })
};
    return Status
};