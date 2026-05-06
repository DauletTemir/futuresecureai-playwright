import { expect, test } from '@fixtures/testFixtures';

test.describe('Future Secure AI contact form', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.goto();
  });

  test('contact form fields are present and writable @regression', async ({ homePage }) => {
    await test.step('verify all form fields are visible', async () => {
      await expect(homePage.nameField).toBeVisible();
      await expect(homePage.emailField).toBeVisible();
      await expect(homePage.messageField).toBeVisible();
    });

    await test.step('fill contact form with test data', () =>
      homePage.fillContactForm(
        'Playwright Smoke Check',
        'qa@example.com',
        'Read-only validation of the production contact form fields.'
      ));

    await test.step('verify field values were accepted', async () => {
      await expect(homePage.nameField).toHaveValue('Playwright Smoke Check');
      await expect(homePage.emailField).toHaveValue('qa@example.com');
      await expect(homePage.messageField).toHaveValue(
        'Read-only validation of the production contact form fields.'
      );
    });
  });

  test('contact form exposes success and error copy in the DOM @regression', async ({ homePage }) => {
    await test.step('verify success message is attached to DOM', () =>
      expect(homePage.formSuccessText).toBeAttached());
    await test.step('verify error message is attached to DOM', () =>
      expect(homePage.formErrorText).toBeAttached());
  });
});
