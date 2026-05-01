import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI footer and external links @regression', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('careers and privacy entry points are available', async ({ homePage }) => {
    await expect(homePage.joinUsLink).toBeVisible();
    await expect(homePage.joinUsLink).toHaveAttribute('href', /greenhouse\.io/);

    await homePage.footerLogo.scrollIntoViewIfNeeded();

    await expect(homePage.privacyPolicyLink).toBeVisible();
    await expect(homePage.footerLogo).toBeVisible();
  });
});
