const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const meliScrapping = async (queryTerm, category, _site) => {
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
      throw new Error('Categoria inválida!')
  }
  const URL = `https://lista.mercadolivre.com.br/${categoryTerm}/${queryTerm}_NoIndex_True#D[A:${queryTerm},on]`;

// const queryTerm = 'celular';
// const category = 'celulares-telefones/celulares-smartphones'

// const queryTerm = 'geladeira';
// const category = 'eletrodomesticos/refrigeracao/geladeiras';

// const queryTerm = 'tv';
// const category = 'eletronicos-audio-video/televisores';

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
    const price = $(product)
      .find('span.price-tag-amount')
      .text()
      .split('R$')[1];
    const src = $(product)
      .find('img.ui-search-result-image__element')
      .attr('data-src');
    productsData.push({ title, price, src, href });
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

  // fs.writeFile('moviesData.json', JSON.stringify(addDetails), (err) => {
  //   if (err) throw err;
  //   console.log('file successfully saved');
  // });

  return addDetails;
});

return result;
};

module.exports = meliScrapping;
