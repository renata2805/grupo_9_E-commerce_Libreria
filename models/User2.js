const { DATEONLY } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'User'; 
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
    let config = {
        tableName: "users",
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const User = sequelize.define(alias,cols,config);
    User.associate = function (models) {
        User.belongsTo(models.Role, { 
            as: "roles",
            foreignKey: "role_id"
        })
};
    return Status
};