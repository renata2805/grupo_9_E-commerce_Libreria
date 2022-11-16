// const { DATEONLY } = require("sequelize");
	
	module.exports = (sequelize, dataTypes) => {
	    let alias = 'UserDB'; 
	    let cols = {
	        id: {
	            type: dataTypes.INTEGER(10).UNSIGNED,
	            primaryKey: true,
	            allowNull: false,
	            autoIncrement: true
	        },
	        nombre: {
	            type: dataTypes.STRING(255),
	            allowNull: false
	        },
            apellido: {
                type: dataTypes.STRING(255),
                allowNull: false
            },
	        tel: {
	            type: dataTypes.INTEGER(20),
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
			image: {
				type: dataTypes.STRING(255),
				allowNull: false 
			},
	        role_id: dataTypes.INTEGER,
	    };
	    let config = {
	        tableName: "users",
	        timestamps: false,
	    }
	    const UserDB = sequelize.define(alias,cols,config);
	//     UserDB.associate = function (models) {
	//         UserDB.belongsTo(models.RolDB, { 
	//             as: "roles",
	//             foreignKey: "role_id"
	//         })
	// };
	    return UserDB
	};
