const express = require('express')
const app = express()
const searchApi = require('./src/routes/Search.route')

app.use(express.static('./client'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 8080;
HOST = '0.0.0.0'

// bypass headers.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
  })

  app.use('/search/v1', searchApi)

  app.listen(PORT, HOST);
  console.log(`Running on http://${HOST}:${PORT}`);
  