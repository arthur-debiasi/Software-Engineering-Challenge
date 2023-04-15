const buscapeProducts = require('../service/buscapeProducts');
const meliProducts = require('../service/meliProducts');


const searchProducts = async ({ body: { query, category, web } }, res) => {
  try {
    let meli, buscape;
    switch (web) {
      case 'meli':
        console.log('meli');
        meli = await meliProducts(query, category);
        return res.status(200).json(meli);
      case 'buscape':
        console.log('buscape');
        buscape = await buscapeProducts(query, category);
        return res.status(200).json(buscape);
      default:
        console.log('meli e buscape');
        meli = await meliProducts(query, category);
        buscape = await buscapeProducts(query, category);
        const results = [...meli, ...buscape]
        return res.status(200).json(results);
    }
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = searchProducts;
