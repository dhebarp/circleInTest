const express = require('express')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// bypass headers.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
  })


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("port" + port);
});
