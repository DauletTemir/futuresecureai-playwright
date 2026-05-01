import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI contact form', () => {
  test('contact form fields are present and writable @regression', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.nameField).toBeVisible();
    await expect(homePage.emailField).toBeVisible();
    await expect(homePage.messageField).toBeVisible();

    await homePage.nameField.fill('Playwright Smoke Check');
    await homePage.emailField.fill('qa@example.com');
    await homePage.messageField.fill('Read-only validation of the production contact form fields.');

    await expect(homePage.nameField).toHaveValue('Playwright Smoke Check');
    await expect(homePage.emailField).toHaveValue('qa@example.com');
    await expect(homePage.messageField).toHaveValue(
      'Read-only validation of the production contact form fields.'
    );
  });

  test('contact form exposes success and error copy in the DOM @regression', async ({ homePage }) => {
    await homePage.goto();

    await expect(homePage.formSuccessText).toBeAttached();
    await expect(homePage.formErrorText).toBeAttached();
  });
});
