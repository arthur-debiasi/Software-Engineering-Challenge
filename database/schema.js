import { Schema, model } from 'mongoose';

const products = new Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  src: { type: String, required: true },
  href: { type: String, required: true },
  description: { type: String, required: true },
});

const queries = new Schema({
  query: { type: String, required: true },
  category: { type: String, required: true },
  web: { type: String, required: true },
  products: [products],
});

const Query = model('Query', queries);


export default { Query };
