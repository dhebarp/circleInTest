const express = require('express')
const app = express()
const searchApi = require('./src/routes/Search.route')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// bypass headers.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
  })

  app.use('/search/v1', searchApi)

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("port" + port);
});
