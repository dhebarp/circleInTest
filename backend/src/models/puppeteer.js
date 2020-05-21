const puppeteer = require("puppeteer");

async function scrapeUrl(url, keyWord) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const contents = await page.$eval("body", (el) => el.innerText);

  const reg = new RegExp(keyWord, "gi");

  const matched = contents.match(reg);


let value  = 0

// rather than display an error the value will be set to 0 for false results.
  if (matched != null) {
    value = matched.length
  } else {
    value = 0
  }

  browser.close();
  return {url, keyWord, value}
}


module.exports = { scrapeUrl }  