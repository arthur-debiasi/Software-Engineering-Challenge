const buscapeScrapping = require('../buscapeScrapping');

const buscapeProducts = async (query, category) => await buscapeScrapping(query, category);

module.exports = buscapeProducts;