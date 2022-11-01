const fs = require('fs');
const path = require("path");

const Product = {
	fileName: "./data/productsDataBase.json",

	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},

	generateId: function () {
		let allProducts = this.findAll();
		let lastProduct = allProducts.pop();
		if (lastProduct) {
			return lastProduct.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},

	findByPk: function (id) {
		let allProducts = this.findAll();
		let productFound = allProducts.find(oneProduct => oneProduct.id === id);
		return productFound;
	},

	findByField: function (field, text) {
		let allProducts = this.findAll();
		let productFound = allProducts.find(oneProduct => oneProduct[field] === text);
		return productFound;
	},

	create: function (productData) {
		let allProducts = this.findAll();
		let newProduct = {
			id: this.generateId(),
			...productData
		}
		allProducts.push(newProduct);
		fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null,  ' '));
		return newProduct;

	},

	delete: function (id) {
		let allProducts = this.findAll();
		let finalProduct = allProducts.filter(oneProduct => oneProduct.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalProduct, null, ' '));
		return true;
	}
}

module.exports = Product;

	