const buscapeScrapping = require('../utils/buscapeScrapping');
const meliScrapping = require('../utils/meliScrapping');
const scrapProducts = require('./meliProducts');

const allProducts = async (query, category) => {
  const meli = await scrapProducts(query, category, meliScrapping);
  const buscape = await scrapProducts(query, category, buscapeScrapping);
  return [...meli, ...buscape];
};

module.exports = allProducts;
