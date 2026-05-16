const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(
    'https://dkt.gt.tc/admin/cron_uniform?i=1',
    {
      waitUntil: 'networkidle2',
      timeout: 0
    }
  );

  console.log('SUCCESS');

  await browser.close();
})();
