const allProducts = require('../service/allProducts');
const buscapeProducts = require('../service/buscapeProducts');
const meliProducts = require('../service/meliProducts');

async function searchProducts({ body: { query, category, web } }, res) {
  try {
    let service;
    switch (web) {
      case 'meli':
        service = meliProducts;
        break;
      case 'buscape':
        service = buscapeProducts;
        break;
      default:
        service = allProducts;
    }
    return res.status(200).json(await service(query, category));
  } catch (error) {
    return res.status(500).json({ message: 'Something went wrong... :/' });
  }
}

module.exports = searchProducts;
