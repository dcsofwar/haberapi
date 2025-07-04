const puppeteer = require('puppeteer');

async function takenews() {
  let datas = [];
  const browser = await puppeteer.launch({
            headless: "new",
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage', 
                '--disable-accelerated-2d-canvas',
                '--disable-gpu'
            ]
        });
  const page = await browser.newPage();

  await page.goto('https://www.sondakika.com/guncel/'); // Buraya kendi URL'ni yaz

  // Tüm .news-txt içindeki tüm a etiketlerinin title özniteliklerini al
  const titles = await page.$$eval('.nws-txt a', elements =>
    elements
      .map(el => el.getAttribute('title'))
      .filter(title => title) // null/undefined değerleri çıkar
  );

  const desc = await page.$$eval('.nws-txt p a', elements =>
    elements
      .map(el => el.innerText)
      .filter(title => title) // null/undefined değerleri çıkar
  );
  for(let i = 0; i < titles.length;i++){
    datas.push({
        "title": titles[i],
        "description": desc[i]
    })
}

  await browser.close();

  return datas;
}
module.exports = {takenews}