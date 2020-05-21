const puppeteer = require("puppeteer");

async function scrapeUrl(url, keyWord) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const contents = await page.$eval("body", (el) => el.innerText);

  const reg = new RegExp(keyWord, "gi");

  const matched = contents.match(reg).length;

  browser.close();
  console.log(matched);
  return matched;
}

scrapeUrl("https://en.wikipedia.org/wiki/Abraham_Lincoln#Funeral_and_burial", "Abraham");