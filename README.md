# [Lexart](https://lexartlabs.com/) Software Engineering Challenge - [Product Search Engine](https://haggles.up.railway.app/)

## 💻 About - [haggles.up.railway.app/](https://haggles.up.railway.app/)

This is a web application for product search that connects to Mercado Livre and Buscapé websites to fetch information about products in categories such as TV, Refrigerator, and Mobile. The application is developed using React for the user interface, Material-UI for creating a modern and responsive interface, Cheerio for web scraping the websites' pages, Express and Node.js for building the backend and managing API routes, and Mongoose for connecting to MongoDB database and storing search results.

## 🚀 Built With

> [![Javascript][Javascript]][Javascript-url][![React][React.js]][React-url][![MUI][MUI]][MUI-url][![axios][axios]][axios-url][![Node.js][Node.js]][Node.js-url][![express][express]][express-url][![mongo][mongo]][mongo-url][![railway][railway]][railway-url]


## 📌 Lessons Learned

- Develop a data extraction algorithm using JavaScript, Axios and Cheerio;
- Clean and process scraped data, then store it in a MongoDB database;
- Plan and organize directory structure for this project;
- Use production-ready UI tools from Material-UI for creating a user-friendly interface.

## Getting Started

### ⬇️ Dependencies

Open a terminal on root directory and use this command for installing client dependencies

```bash
cd client && npm install
```

Open another terminal on root directory and use this command for installing server dependencies

```bash
cd server && npm install
```

### ⚡ Running the Aplication

Initially, you need to configure your environment variables:

Rename `.env.example` files to `.env`. These files are located in `/client` and `/server`."

After that, the server application can be started with:

```bash
cd server && npm start
```

Or, also with the development script:

```bash
cd server && npm run dev
```

And the client application can be started with:

```bash
cd client && npm start
```

## 🚶 Next Steps

- Develop a automated testing routine
- Add more catogories to the engine
- Create interfaces for ordering the results by price
- Add more e-commerce websites for the data extraction

## 💬 Contact Me

<div align="left" style="display: inline_block">
  <a href="https://arthur-debiasi.github.io" target="_blank">
  <img height="28rem" src="https://img.shields.io/badge/my_portfolio-3fc337?style=for-the-badge" target="_blank">
  </a>
  <a href="https://www.linkedin.com/in/arthur-debiasi" target="_blank"><img height="28rem" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
  <a href = "mailto:arthurdebiasi@hotmail.com"><img height="28rem" src="https://img.shields.io/badge/outlook-0078D4?style=for-the-badge&logo=microsoftoutlook&logoColor=white" target="_blank"></a>
</div>

[Javascript]: https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[Javascript-url]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[MUI]: https://img.shields.io/badge/material_ui-007FFF?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://img.shields.io/badge/material_ui-007FFF?style=for-the-badge&logo=mui&logoColor=white

[axios]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[axios-url]: https://axios-http.com/ptbr/docs/intro

[Node.js]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node.js-url]: https://nodejs.org/

[express]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/

[mongo]: https://img.shields.io/badge/mongodb-5A29E4?style=for-the-badge&logo=mongodb&logoColor=white
[mongo-url]: https://www.mongodb.com/

[railway]: https://img.shields.io/badge/railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white
[railway-url]: https://railway.app/
