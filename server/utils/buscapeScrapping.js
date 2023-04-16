const axios = require('axios');
const cheerio = require('cheerio');

const buscapeScrapping = async (queryTerm, caregoryTerm) => {
  let category = '8';
  switch (caregoryTerm) {
    case 'celular':
      category = '7';
      break;
    case 'geladeira':
      category = '8';
      break;
    case 'tv':
      category = '3';
      break;
    default:
      break;
  }
  const URLcat = `https://www.buscape.com.br/search?q=${queryTerm}&hitsPerPage=48&refinements%5B0%5D%5Bid%5D=categoryId&refinements%5B0%5D%5Bvalues%5D%5B0%5D=${category}&page=1&sortBy=default&isDealsPage=false&enableRefinementsSuggestions=true`;

  const productsData = [];

  async function getHTML(url) {
    const { data } = await axios.get(url);
    return data;
  }

  const URL = URLcat;

  const result = await getHTML(URL).then(async (res) => {
    const $ = cheerio.load(res);
    $('div.SearchCard_ProductCard__1D3ve').each((i, product) => {
      let x = $(product)
        .find('div[data-testid="product-card::image"]')
        .children()
        .eq(0)
        .find('noscript')
        .html();
      x = x !== null && `${x.split('src="')[1].split(' ')[0].split('jpg')[0]}jpg`;
      const title = $(product)
        .find('h2.SearchCard_ProductCard_Name__ZaO5o')
        .text();
      const href = `https://www.buscape.com.br${$(product).find('a.SearchCard_ProductCard_Inner__7JhKb').attr('href')}`;

      const price = $(product)
        .find('[data-testid="product-card::price"]')
        .text();
      // ('product-card::price');
      const src = !x ? $(product).find('img').attr('src') : x;
      productsData.push({
        title,
        price: price.replace('R$ ', '').replace('.', '').replace(',', '.'),
        src,
        href,
      });
    });
    const addDetails = await Promise.all(
      productsData.map(async (e) => {
        const res2 = await getHTML(e.href);
        const $2 = cheerio.load(res2);
        const descriptionElement = $2(
          '.AttributeBlock_GroupContent__nhYRo.AttributeBlock_NoBorders__UgSGr',
        )
          .children()
          .eq(0)
          .text();
        const descriptionElement2 = $(
          '.AttributeBlock_GroupContent__nhYRo.AttributeBlock_NoBorders__UgSGr',
        )
          .children()
          .eq(1)
          .text();
        return {
          ...e,
          description: `${descriptionElement} ${descriptionElement2}`,
        };
      }),
    );
    return addDetails;
    // fs.writeFile('moviesData.json', JSON.stringify(productsData), (err) => {
    //   if (err) throw err;
    //   console.log('file successfully saved');
    // });
  });

  return result;
};

module.exports = buscapeScrapping;
