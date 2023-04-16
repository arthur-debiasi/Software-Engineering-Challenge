const buscapeProducts = require('./buscapeProducts');
const meliProducts = require('./meliProducts');

const allProducts = async (query, category) => {
  const meli = await meliProducts(query, category);
  const buscape = await buscapeProducts(query, category);
  return [...meli, ...buscape];
};

module.exports = allProducts;
