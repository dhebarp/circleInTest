const puppeteer = require('puppeteer');

async function scrapeUrl(url) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const contents = await page.$eval('body', el => el.innerText)



  browser.close();
console.log(contents);
  return contents
}

scrapeUrl('https://en.wikipedia.org/wiki/Abraham_Lincoln#Funeral_and_burial')