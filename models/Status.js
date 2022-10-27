const { DATEONLY } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Status'; 
    let cols = {
        id: {
            type: dataTypes.INT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        status: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    };
    let config = {
        tableName: "status",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Status = sequelize.define(alias,cols,config);
    Status.associate = function (models) {
        Status.belongsToMany(models.Product, { 
            as: "products",
            foreignKey: "status_id"
        })
};
    return Status
};