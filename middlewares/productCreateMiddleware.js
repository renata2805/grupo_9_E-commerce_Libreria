const path = require('path');
const { body } = require('express-validator');

const productValidations = [
	body('title').notEmpty().withMessage('Debes definir un título para el producto').isLength(5).withMessage("El título debe tener al menos 5 caracteres"),
	body('description')
		.notEmpty().withMessage('Debes agregar una descripción').isLength(20).withMessage("La descripción debe contener al menos 20 caracteres"),
	body('image').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.JPG', '.JPEG', 'PNG', '.GIF'];
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

module.exports = productValidations