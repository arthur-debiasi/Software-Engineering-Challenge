const allProducts = require('../service/allProducts');
const buscapeProducts = require('../service/buscapeProducts');
const meliProducts = require('../service/meliProducts');



const searchProducts = async ({ body: { query, category, web } }, res) => {
  try {
    switch (web) {
      case 'meli':
        console.log('meli');
        const meli = await meliProducts(query, category);
        return res.status(200).json(meli);
      case 'buscape':
        console.log('buscape');
        const buscape = await buscapeProducts(query, category);
        return res.status(200).json(buscape);
      default:
        console.log('meli e buscape');
        const results = await allProducts(query, category);
        return res.status(200).json(results);
    }
  } catch (error) {
    console.error(error.message);
    console.error(error);
    res.status(500).json({message: 'Vixi... vixi... VIXI...'})
  }
};

module.exports = searchProducts;
