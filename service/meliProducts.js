const QueryProducts = require('../database/Model/QueryProducts');
const meliScrapping = require('../meliScrapping');

const findQuery = async (query, category, web) => {
  const foundQuery = await QueryProducts.findOne({query, category, web});
  return foundQuery;
}

const meliProducts = async (query, category) => {
  const haveBeenDone = await findQuery(query, category, 'meli');
  if(haveBeenDone) {console.log('haveBeenDone'); return haveBeenDone.products;}
  const scrapping = await meliScrapping(query, category);
  const results = await QueryProducts.create({
    query,
    category,
    web: 'meli',
    products: scrapping,
  });
  return results.products; 
};

module.exports = meliProducts;