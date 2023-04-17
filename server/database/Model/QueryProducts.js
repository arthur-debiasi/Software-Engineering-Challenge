const mongoose = require('mongoose');

const { Schema } = mongoose;
const { model } = mongoose;

const products = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  src: { type: String, required: true },
  href: { type: String, required: true },
  description: { type: String, required: false },
});

const queries = new Schema({
  query: { type: String, required: true },
  category: { type: String, required: true },
  web: { type: String, required: true },
  products: [products],
});

module.exports = model('Query', queries);
