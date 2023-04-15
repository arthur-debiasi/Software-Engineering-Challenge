const buscapeScrapping = require('../buscapeScrapping');
const QueryProducts = require('../database/Model/QueryProducts');

const findQuery = async (query, category, web) => {
  const foundQuery = await QueryProducts.findOne({query, category, web});
  return foundQuery;
}

const buscapeProducts = async (query, category) => {
  const haveBeenDone = await findQuery(query, category, 'buscape');
  if(haveBeenDone) {console.log('haveBeenDone'); return haveBeenDone.products;}
  const scrapping = await buscapeScrapping(query, category);
  const results = await QueryProducts.create({
    query,
    category,
    web: 'buscape',
    products: scrapping,
  });
  return results.products; 
};

module.exports = buscapeProducts;
