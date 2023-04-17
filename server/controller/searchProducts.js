const allProducts = require('../service/allProducts');
const buscapeProducts = require('../service/buscapeProducts');
const meliProducts = require('../service/meliProducts');

async function searchProducts({ body: { query, category, web } }, res) {
  try {
    let callback;
    switch (web) {
      case 'meli':
        callback = meliProducts;
        break;
      case 'buscape':
        callback = buscapeProducts;
        break;
      default:
        callback = allProducts;
    }
    return res.status(200).json(await callback(query, category));
  } catch (error) {
    console.error(error.message);
    console.error(error);
    return res.status(500).json({ message: 'Something went wrong... :/' });
  }
}

module.exports = searchProducts;
