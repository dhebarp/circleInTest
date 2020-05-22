const scraping = require('../models/puppeteer')


  exports.getUrl = async (req, res, next) => {
    console.log(req.body);
    const webData = await scraping.scrapeUrl(req.body.webURL, req.body.keyWord)
    res.send(webData)
  }