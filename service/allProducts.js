const buscapeScrapping = require('../buscapeScrapping');
const QueryProducts = require('../database/Model/QueryProducts');
const buscapeProducts = require('./buscapeProducts');
const meliProducts = require('./meliProducts');

const findQuery = async (query, category, web) => {
  const foundQuery = await QueryProducts.findOne({query, category, web});
  return foundQuery;
}

const allProducts = async (query, category) => {
  const meli = await meliProducts(query, category);
  const buscape = await buscapeProducts(query, category);
  return [...meli, ...buscape]; 
};

module.exports = allProducts;