import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  const downloadButton = page.locator('a[download]');
  await downloadButton.evaluate((node) => (node.innerHTML = ''));

  await page.pdf({
    path: 'public/Archit_resume.pdf',
    margin: {
      top: '50px',
      bottom: '80px',
    },
    printBackground: true,
  });

  await browser.close();
})();
