const express = require('express');
const cors = require('cors');
const meliScrapping = require('.');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Leia o course!');
});

app.post('/', ({ body: { query, category, site } }, res) => {
  console.log({ query, category, site });
  meliScrapping(query, category, 'x').then((message) => res.status(200).json(message));
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`A API está ouvindo na porta ${port}`);
});
