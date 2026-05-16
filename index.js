const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  });

  while (true) {
    try {
      const page = await browser.newPage();

      await page.goto(
        'https://dkt.gt.tc/admin/cron_uniform?i=1',
        {
          waitUntil: 'domcontentloaded',
          timeout: 60000
        }
      );

      console.log('SUCCESS', new Date().toISOString());

      await page.close();
    } catch (e) {
      console.log(e);
    }

    await new Promise(r => setTimeout(r, 120000));
  }
}

run();
