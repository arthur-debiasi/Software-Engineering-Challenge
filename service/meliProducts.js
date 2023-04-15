const meliScrapping = require('../meliScrapping');

const meliProducts = async (query, category) => await meliScrapping(query, category);

module.exports = meliProducts;