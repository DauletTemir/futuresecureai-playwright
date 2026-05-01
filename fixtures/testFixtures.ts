import { test as base } from '@playwright/test';
import { FutureSecureHomePage } from '@pages/futureSecureHomePage';

type TestFixtures = {
  homePage: FutureSecureHomePage;
};

export const test = base.extend<TestFixtures>({
  homePage: async ({ page }, use) => {
    await use(new FutureSecureHomePage(page));
  },
});

export { expect } from '@playwright/test';
