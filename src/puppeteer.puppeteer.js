

const timeout = 10000;

describe(
  '/ (Home Page)',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('http://localhost:3000/');
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it('should load without error', async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('Flashcard ProState');
    });
  },
  timeout
);

describe(
  '/stackform',
  () => {
    let page;
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
      await page.goto('http://localhost:3000/stackform');
    }, timeout);

    afterAll(async () => {
      await page.close();
    });

    it('should load without error and the correct message', async () => {
      let text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain('Create a new Stack');
    });

    it('should complete the form', async () => {
      const button = await page.$('.btn.btn-default');
      await page.type('.form-control', 'ey');
      await button.tap();
      let text = await page.evaluate(() => document.body.textContent);
      await page.screenshot({path: 'test-assets/example.png'});
      expect(text).toContain('Prompt:');
    });
  },
  timeout
);

