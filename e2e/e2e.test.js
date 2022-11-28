import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Test e2e for popover show', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 500,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Click button and show popover', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.button-toggle__button');
    button.click();
    await page.waitForSelector('.button__popover');
  });
});
