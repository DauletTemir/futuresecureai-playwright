import { aiCoworkerNames } from '@data/aiCoworkers';
import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI homepage smoke', () => {
  test('critical homepage content renders @smoke', async ({ homePage }) => {
    await homePage.goto();
    await homePage.expectLoaded();

    await expect(homePage.whereWePlayHeading).toBeVisible();
    await expect(homePage.partnerSectionHeading).toBeVisible();
    await expect(homePage.careersHeading).toBeVisible();
  });

  test('header partner call-to-action is visible @smoke', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.topPartnerLink).toBeVisible();
    await expect(homePage.cookieDialog).not.toBeVisible();
  });

  test('sample AI co-worker cards are visible @smoke', async ({ homePage }) => {
    await homePage.goto();

    for (const name of aiCoworkerNames.slice(0, 5)) {
      await expect(homePage.page.getByText(name, { exact: true })).toBeVisible();
    }
  });
});
