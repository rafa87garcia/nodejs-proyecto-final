const mongoose = require('mongoose');
const db = require('../db');
const Product = require('../Models/product.model');


const products = [
  {
    name: "Producto 1",
    description: "Descripction producto 1",
    pvp: 15,
    category: 'Man'
  },
  {
    name: "Producto 2",
    description: "Descripction producto 2",
    pvp: 15,
    category: 'Man'
  },
];

const productsDocument = products.map(item => new Product(item));

db.connectDB
  .then(async () => {
    const allProducts = await Product.find();

    if (allProducts.length > 0) {
      await Product.collection.drop();
    }
  })
  .catch(err => console.error(`Error eliminado información de la DB: ${err}`))
  .then(async () => {
    await Product.insertMany(productsDocument);
  })
  .catch(err => console.error(`Error creando documentos en DB: ${err}`))
  .finally(() => mongoose.disconnect())