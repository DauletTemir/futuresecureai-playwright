# Future Secure AI Test Framework

Playwright + TypeScript test project for the production site:

- Target: `https://www.futuresecure.ai`
- Review date for site structure in this repo: April 29, 2026
- Test style: POM + fixtures + smoke/regression tagging

## Features

- **Cross-browser testing** — Chromium, Firefox, WebKit (Safari) via Playwright projects
- **API health checks** — HTTP-level tests for homepage, careers, and privacy policy endpoints
- **UI smoke suite** — critical homepage content, AI co-worker cards, header CTA
- **UI regression suite** — contact form field validation, footer links, Greenhouse careers link
- **Page Object Model** — all selectors and actions encapsulated in `pages/`
- **Shared fixtures** — typed `homePage` fixture via `fixtures/testFixtures.ts`
- **Stable test data** — AI co-worker names driven from `data/aiCoworkers.ts`
- **Allure reporting** — `allure-playwright` reporter + HTML report generated on every run
- **CI/CD with GitHub Actions** — smoke job on push/PR (Chromium), nightly cross-browser regression matrix
- **Slack failure notifications** — webhook alerts on CI failure for both smoke and nightly jobs
- **Scheduled nightly runs** — cron `0 5 * * *` triggers full regression across all browsers
- **Artifact upload** — Playwright report, test results, and Allure results uploaded on every CI run
- **Safe form testing** — contact form validated without real production submissions

## Project structure

```text
.
├── .github/workflows/          # CI pipelines (smoke + nightly cross-browser)
├── data/                       # Stable test data (AI co-worker names)
├── docs/                       # Site analysis, locators, trends, CI notes
├── fixtures/                   # Shared Playwright fixtures
├── pages/                      # Page object models
├── tests/api/                  # HTTP-level health checks
├── tests/ui/                   # Browser tests (smoke + regression)
├── playwright.config.ts
└── tsconfig.json
```

## Commands

```bash
npm test                    # run all tests
npm run test:smoke          # @smoke tag, Chromium only
npm run test:regression     # @regression tag, all browsers
npm run test:api            # API tests only
npm run test:headed         # run with visible browser
npm run test:ui             # open Playwright UI mode
npm run report              # open HTML report
npm run report:allure       # serve Allure report
npm run report:allure:generate  # generate Allure report from results
npm run list                # list all discovered tests
npm run codegen             # launch Playwright codegen against production
```

## CI/CD

| Job | Trigger | Browsers |
|-----|---------|----------|
| Smoke | push / pull_request / workflow_dispatch | Chromium |
| Nightly regression | schedule (05:00 UTC) / workflow_dispatch | Chromium, Firefox, WebKit |

Slack notifications are sent to `SLACK_WEBHOOK_URL` on any failure.

## Notes

- `BASE_URL` defaults to `https://www.futuresecure.ai` (override via env var).
- Retries: 2 on CI, 0 locally.
- Viewport: 1440×960, headless by default.
- Screenshots and video captured only on failure; trace on first retry.
- This suite avoids real production form submissions.
- For locator discovery, start with `npm run codegen`, then refine to user-facing locators.

## Reference docs in this repo

- `docs/site-structure.md`
- `docs/locators.md`
- `docs/ci-cd-options.md`
- `docs/playwright-trends-2026.md`
