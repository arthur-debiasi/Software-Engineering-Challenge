const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const meliScrapping = async (query, category, _site) => {
  let categoryTerm;
  switch (category) {
    case 'celular':
      categoryTerm = 'celulares-telefones/celulares-smartphones';
      break;
    case 'geladeira':
      categoryTerm = 'eletrodomesticos/refrigeracao/geladeiras';
      break;
    case 'tv':
      categoryTerm = 'eletronicos-audio-video/televisores';
      break;
    default:
      throw new Error('Categoria inválida!');
  }
  const queryTerm = query.replaceAll(' ', '%20');
  const URL = `https://lista.mercadolivre.com.br/${categoryTerm}/${queryTerm}_NoIndex_True#D[A:${queryTerm},on]`;

  const productsData = [];

  async function getHTML(url) {
    const { data } = await axios.get(url);
    return data;
  }

  const result = await getHTML(URL).then(async (res) => {
    const $ = cheerio.load(res);
    $('.ui-search-layout__item').each(async (i, product) => {
      const title = $(product).find('h2.ui-search-item__title').text();
      const href = $(product).find('a.ui-search-link').attr('href');
      let price = $(product)
        .find('span.price-tag-amount:nth-child(2)')
        .text().split('R$');
      const src = $(product)
        .find('img.ui-search-result-image__element')
        .attr('data-src');
      productsData.push({ title, price: price[price.length === 4 ? 2 : 1], src, href });
    });

    const addDetails = await Promise.all(
      productsData.map(async (e) => {
        const res = await getHTML(e.href);
        const $ = cheerio.load(res);
        const descriptionElement = $('.ui-pdp-description__content');
        const description =
          descriptionElement.length > 0
            ? descriptionElement.html().replace(/<br>/g, '\n')
            : '';
        return { ...e, description: description };
      })
    );
    return addDetails;
  });

  return result;
};

module.exports = meliScrapping;
