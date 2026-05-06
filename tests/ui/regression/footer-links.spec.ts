import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI footer and external links', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('careers and privacy entry points are available @regression', async ({ homePage }) => {
    await test.step('verify Join Us link is visible and points to Greenhouse', async () => {
      await expect(homePage.joinUsLink).toBeVisible();
      await expect(homePage.joinUsLink).toHaveAttribute('href', /greenhouse\.io/);
    });

    await test.step('scroll to footer and verify logo and privacy link', async () => {
      await homePage.footerLogo.scrollIntoViewIfNeeded();
      await expect(homePage.privacyPolicyLink).toBeVisible();
      await expect(homePage.footerLogo).toBeVisible();
    });
  });
});
