const { DATEONLY } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        author: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        editorial: {
            type: dataTypes.STRING(120),
            allowNull: false
        },
        origin: {
            type: dataTypes.STRING(40),
            allowNull: false
        },
        pages: {
            type: dataTypes.INT(1000),
            allowNull: false
        },
        public_date: {
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(1000),
            allowNull: true
        },
        price: {
            type: dataTypes.DECIMAL(6,2).UNSIGNED,
            allowNull: false
        },
        calification: {
            type: dataTypes.TINYINT(10).UNSIGNED,
            allowNull: false
        },
        about_author: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        image:{
            type: dataTypes.STRING(255)
        },
        category_id: dataTypes.INT,
        status_id: dataTypes.INT,
    };
    let config = {
        tableName: "products",
        timestamps: false,
        // createdAt: 'created_at',
        // updatedAt: 'updated_at',
        // deletedAt: false
    }
    const Product = sequelize.define(alias,cols,config);
    Product.associate = function (models) {
        Product.belongsTo(models.Category, { 
            as: "categories",
            foreignKey: "category_id"
        })
        Product.belongsTo(models.Status, { 
            as: "status",
            foreignKey: 'status_id',
            timestamps: false
        })
    }
    return Product
};

