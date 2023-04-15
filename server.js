const express = require('express');
const cors = require('cors');
const searchProducts = require('./controller/searchProducts');
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Leia o course!');
});

app.post('/', searchProducts);

// Inicie o servidor
app.listen(port, () => {
  console.log(`A API está ouvindo na porta ${port}`);
});
