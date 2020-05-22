const scraping = require('../models/puppeteer')


  exports.getUrl = async (req, res, next) => {
    console.log(req.body);
    const webData = await scraping.scrapeUrl(req.body.webURL, req.body.keyWord)
    if (webData.value !== 0) {
      return res.status(200).json({
          success: true,
          data: webData
      })
  } else {
      return res.status(404).json({
          success: false,
          data: null,
          msg: "No Data Found"
      })
  }
};