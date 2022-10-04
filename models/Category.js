module.exports = (sequelize, dataTypes) => {
    let alias = 'Category'; 
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
    };
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Category = sequelize.define(alias,cols,config);
    Category.associate = function (models) {
        Category.belongsToMany(models.Product, { 
            as: "products",
            foreignKey: "category_id"
        })
    }
    return Category
};
