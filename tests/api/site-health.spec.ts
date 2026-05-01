import { expect, test } from '@playwright/test';

test.describe('Future Secure AI site health', () => {
  test('homepage returns 200 @smoke', async ({ request, baseURL }) => {
    const response = await request.get(baseURL || 'https://www.futuresecure.ai');
    expect(response.ok()).toBeTruthy();
  });

  test('careers link is reachable @regression', async ({ request }) => {
    const response = await request.get('https://job-boards.anz.greenhouse.io/futuresecureai');
    expect(response.ok()).toBeTruthy();
  });

  test('privacy policy page is reachable @regression', async ({ request }) => {
    const response = await request.get('https://career.futuresecure.ai/privacy-policy');
    expect(response.ok()).toBeTruthy();
  });
});
