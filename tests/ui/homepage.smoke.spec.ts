import { aiCoworkerNames } from '@data/aiCoworkers';
import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI homepage smoke', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('critical homepage content renders @smoke', async ({ homePage }) => {
    await homePage.expectLoaded();
    await homePage.verifyMainSections();
  });

  test('header partner call-to-action is visible @smoke', async ({ homePage }) => {
    await expect(homePage.topPartnerLink).toBeVisible();
    await expect(homePage.cookieDialog).not.toBeVisible();
  });

  test('sample AI co-worker cards are visible @smoke', async ({ homePage }) => {
    for (const name of aiCoworkerNames.slice(0, 5)) {
      await expect(homePage.page.getByText(name, { exact: true })).toBeVisible();
    }
  });
});
