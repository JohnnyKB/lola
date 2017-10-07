const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/', routes);

app.use(express.static('public'));

app.listen(3001, () => {
  console.log('Listening');
});
