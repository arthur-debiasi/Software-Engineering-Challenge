const QueryProducts = require('../database/Model/QueryProducts');
const meliScrapping = require('../utils/meliScrapping');

const findQuery = async (query, category, web) => {
  const foundQuery = await QueryProducts.findOne({ query, category, web });
  return foundQuery;
};

const meliProducts = async (query, category) => {
  try {
    const haveBeenDone = await findQuery(query, category, 'meli');
    if (haveBeenDone) { return haveBeenDone.products; }
    const scrapping = await meliScrapping(query, category);
    const results = await QueryProducts.create({
      query,
      category,
      web: 'meli',
      products: scrapping,
    });
    return results.products;
  } catch (err) {
    return [];
  }
};

module.exports = meliProducts;
