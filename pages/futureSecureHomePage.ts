import { expect, type Locator, type Page } from '@playwright/test';

export class FutureSecureHomePage {
  readonly page: Page;

  readonly topPartnerLink: Locator;
  readonly cookieDialog: Locator;
  readonly cookieAcceptButton: Locator;
  readonly navHomeLink: Locator;
  readonly navVisionLink: Locator;
  readonly navCapabilitiesLink: Locator;
  readonly navMarketsLink: Locator;
  readonly navLeadershipLink: Locator;
  readonly navCareersLink: Locator;
  readonly navContactLink: Locator;

  readonly heroHeading: Locator;
  readonly whatWeDoHeading: Locator;
  readonly whereWePlayHeading: Locator;
  readonly partnerSectionHeading: Locator;
  readonly careersHeading: Locator;

  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly messageField: Locator;
  readonly contactForm: Locator;
  readonly contactSubmitButton: Locator;
  readonly formSuccessText: Locator;
  readonly formErrorText: Locator;

  readonly joinUsLink: Locator;
  readonly privacyPolicyLink: Locator;
  readonly footerLogo: Locator;

  constructor(page: Page) {
    this.page = page;

    this.topPartnerLink = page.getByRole('link', { name: 'Partner with us' }).first();
    this.cookieDialog = page.getByText('Cookie Usage');
    this.cookieAcceptButton = page.getByRole('button', { name: 'Accept All' });
    this.navHomeLink = page.getByRole('link', { name: 'Home' });
    this.navVisionLink = page.getByRole('link', { name: 'Our Vision' });
    this.navCapabilitiesLink = page.getByRole('link', { name: 'Our Capabilities' });
    this.navMarketsLink = page.getByRole('link', {
      name: 'Our Markets and AI Co-Workers',
    });
    this.navLeadershipLink = page.getByRole('link', { name: 'Our Leadership' });
    this.navCareersLink = page.getByRole('link', { name: 'Joining Our Team' });
    this.navContactLink = page.getByRole('link', { name: 'Contact Us' });

    this.heroHeading = page.getByRole('heading', { name: /Global leader in Red-Zone/i });
    this.whatWeDoHeading = page.getByRole('heading', { name: 'What we do' });
    this.whereWePlayHeading = page.getByRole('heading', { name: 'Where we play' });
    this.partnerSectionHeading = page.getByRole('heading', { name: 'Partner with us' });
    this.careersHeading = page.getByRole('heading', { name: 'Careers at Future Secure AI' });

    this.nameField = page.getByLabel('Name');
    this.emailField = page.getByLabel('Email');
    this.messageField = page.getByLabel('Message');
    this.contactForm = page.locator('form');
    this.contactSubmitButton = this.contactForm.locator(
      'button[type="submit"], input[type="submit"]'
    );
    this.formSuccessText = page.getByText('Thank you! Your submission has been received!');
    this.formErrorText = page.getByText('Oops! Something went wrong while submitting the form.');

    this.joinUsLink = page.getByRole('link', { name: 'JOIN US' });
    this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' });
    this.footerLogo = page.getByAltText(/Future Secure AI logo featuring a stylized shield icon and the text/i);
  }

  async goto() {
    const response = await this.page.goto('/');
    await expect(response?.ok()).toBeTruthy();
    await this.dismissCookieBannerIfPresent();
  }

  async expectLoaded() {
    await expect(this.page).toHaveTitle(/Future Secure AI/i);
    await expect(this.heroHeading).toBeVisible();
    await expect(this.whatWeDoHeading).toBeVisible();
  }

  async dismissCookieBannerIfPresent() {
    if (await this.cookieDialog.isVisible({ timeout: 8_000 }).catch(() => false)) {
      await this.cookieAcceptButton.click();
      await expect(this.cookieDialog).not.toBeVisible({ timeout: 8_000 });
    }
  }

  async acceptCookies() {
    await this.dismissCookieBannerIfPresent();
  }

  async verifyMainSections() {
    await expect(this.whereWePlayHeading).toBeVisible();
    await expect(this.partnerSectionHeading).toBeVisible();
    await expect(this.careersHeading).toBeVisible();
  }

  async verifyFooterLinks() {
    await expect(this.joinUsLink).toBeVisible();
    await expect(this.privacyPolicyLink).toBeVisible();
    await expect(this.footerLogo).toBeVisible();
  }

  async fillContactForm(name: string, email: string, message: string) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.messageField.fill(message);
  }
}
