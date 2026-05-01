import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI footer and external links', () => {
  test('careers and privacy entry points are available @regression', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.joinUsLink).toBeVisible();
    await expect(homePage.joinUsLink).toHaveAttribute('href', /greenhouse\.io/);

    await expect(homePage.privacyPolicyLink).toBeVisible();
    await expect(homePage.footerLogo).toBeVisible();
  });
});
