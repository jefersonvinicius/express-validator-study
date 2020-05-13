const express = require('express');
const app = express();

const routes = require('./routes');

require('./database');

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Serving in http://localhost:3333');
});
