const path = require('path');
const { body } = require('express-validator');
const db = require('../database/models');
const UserDB = db.UserDB

const userValidations = [
	body('nombre')
		.notEmpty().withMessage('Debes escribir un nombre').bail()
		.isLength(2).withMessage("Tu nombre debe tener al menos 2 caracteres"),
	body('email')
		.notEmpty().withMessage('Debes escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de email válido'),
	body('password')
		.notEmpty().withMessage('Debes escribir una contraseña').bail()
		.isLength(8).withMessage("La contraseña debe tener al menos 8 caracteres"),
	body('imagen')
		.custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.JPG','.png', '.gif'];
		if (!file) {
			throw new Error('Debes subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	})
]

module.exports = userValidations