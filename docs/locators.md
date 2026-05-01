# Locator Inventory

Reviewed against `https://www.futuresecure.ai/` on April 29, 2026.

Playwright guidance favors role-, label-, alt-, and text-based locators before CSS selectors:
https://playwright.dev/docs/locators

## Navigation

- `page.getByRole('link', { name: 'Partner with us' }).first()`
- `page.getByRole('button', { name: 'Accept All' })`
- `page.getByRole('button', { name: 'Reject All' })`
- `page.getByRole('link', { name: 'Home' })`
- `page.getByRole('link', { name: 'Our Vision' })`
- `page.getByRole('link', { name: 'Our Capabilities' })`
- `page.getByRole('link', { name: 'Our Markets and AI Co-Workers' })`
- `page.getByRole('link', { name: 'Our Leadership' })`
- `page.getByRole('link', { name: 'Joining Our Team' })`
- `page.getByRole('link', { name: 'Contact Us' })`

## Headings and content

- `page.getByRole('heading', { name: /Global leader in Red-Zone/i })`
- `page.getByRole('heading', { name: 'What we do' })`
- `page.getByRole('heading', { name: 'Where we play' })`
- `page.getByRole('heading', { name: 'Partner with us' })`
- `page.getByRole('heading', { name: 'Careers at Future Secure AI' })`
- `page.getByText('Tate AI', { exact: true })`
- `page.getByText('Astra AI', { exact: true })`
- `page.getByText('Bob AI', { exact: true })`

## Contact form

- `page.getByLabel('Name')`
- `page.getByLabel('Email')`
- `page.getByLabel('Message')`
- Preferred submit locator if accessible button text exists:
  - `page.getByRole('button', { name: /submit|send|partner/i })`
- Safe fallback currently used in POM:
  - `page.locator('form').locator('button[type="submit"], input[type="submit"]')`
- DOM copy:
  - `page.getByText('Thank you! Your submission has been received!')`
  - `page.getByText('Oops! Something went wrong while submitting the form.')`

## Footer

- `page.getByRole('link', { name: 'JOIN US' })`
- `page.getByRole('link', { name: 'Privacy Policy' })`
- `page.getByAltText(/Future Secure AI logo/i)`

## When to refine locators further

- If the header menu gets a stable accessible name, add a dedicated menu-toggle locator and a navigation-open helper in the POM.
- If the site adds duplicate links or duplicate headings.
- If the form becomes embedded in an iframe.
- If marketing content becomes localized and text changes by language.
- If the team can add `data-testid` attributes for truly stable contracts.
