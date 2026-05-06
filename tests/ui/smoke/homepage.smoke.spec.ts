import { aiCoworkerNames } from '@data/aiCoworkers';
import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI homepage smoke', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('critical homepage content renders @smoke', async ({ homePage }) => {
    await test.step('verify page title and hero heading', () => homePage.expectLoaded());
    await test.step('verify main sections are visible', () => homePage.verifyMainSections());
  });

  test('header partner call-to-action is visible @smoke', async ({ homePage }) => {
    await test.step('check partner link is visible', () =>
      expect(homePage.topPartnerLink).toBeVisible());
    await test.step('check cookie dialog is dismissed', () =>
      expect(homePage.cookieDialog).not.toBeVisible());
  });

  test('sample AI co-worker cards are visible @smoke', async ({ homePage }) => {
    await test.step('verify first 5 AI co-worker names render on page', async () => {
      for (const name of aiCoworkerNames.slice(0, 5)) {
        await expect(homePage.page.getByText(name, { exact: true })).toBeVisible();
      }
    });
  });
});
