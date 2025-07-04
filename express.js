const puppeteer = require('puppeteer');

async function takess(link) {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(link);

  await page.setViewport({ width: 1920, height: 1080 });
  const screenshot = await page.screenshot({ encoding: 'base64' });
  await page.close();

  return screenshot;
}

module.exports = {takess}