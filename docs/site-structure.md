# Future Secure AI Site Structure

Source reviewed: `https://www.futuresecure.ai/` on April 29, 2026.

## Main sections

1. Header navigation
2. Cookie consent modal on first load
3. Hero section
4. `What we do`
5. AI Co-Worker examples
6. `Where we play`
7. `Partner with us` contact form
8. `Careers at Future Secure AI`
9. Footer logo and privacy link

## Stable user-facing anchors

- Header links: `Home`, `Our Vision`, `Our Capabilities`, `Our Markets and AI Co-Workers`, `Our Leadership`, `Joining Our Team`, `Contact Us`
- Cookie controls: `Accept All`, `Reject All`, `Customize`
- Hero heading: `Global leader in Red-Zone AI Co-Workers`
- Section headings: `What we do`, `Where we play`, `Partner with us`, `Careers at Future Secure AI`
- Contact fields: `Name`, `Email`, `Message`
- External links: `JOIN US`, `Privacy Policy`

## Test strategy for production

- Prefer read-only checks on production.
- Handle the cookie modal before asserting UI content.
- Avoid sending real contact-form submissions from CI.
- Split suite into:
  - `@smoke`: homepage load, main headings, nav, sample cards
  - `@regression`: footer links, form field presence, API reachability
- If the team wants form-submission coverage, run it only in a non-production environment with test inboxes and dedicated test data.
