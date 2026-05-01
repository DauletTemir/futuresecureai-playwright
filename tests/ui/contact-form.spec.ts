import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI contact form @regression', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('contact form fields are present and writable', async ({ homePage }) => {
    await expect(homePage.nameField).toBeVisible();
    await expect(homePage.emailField).toBeVisible();
    await expect(homePage.messageField).toBeVisible();

    await homePage.fillContactForm(
      'Playwright Smoke Check',
      'qa@example.com',
      'Read-only validation of the production contact form fields.'
    );

    await expect(homePage.nameField).toHaveValue('Playwright Smoke Check');
    await expect(homePage.emailField).toHaveValue('qa@example.com');
    await expect(homePage.messageField).toHaveValue(
      'Read-only validation of the production contact form fields.'
    );
  });

  test('contact form exposes success and error copy in the DOM', async ({ homePage }) => {
    await expect(homePage.formSuccessText).toBeAttached();
    await expect(homePage.formErrorText).toBeAttached();
  });
});
