const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });

    const page = await browser.newPage();

    await page.goto(
      'https://dkt.gt.tc/admin/cron_uniform?i=1',
      {
        waitUntil: 'domcontentloaded',
        timeout: 60000
      }
    );

    console.log('SUCCESS');

    await browser.close();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
