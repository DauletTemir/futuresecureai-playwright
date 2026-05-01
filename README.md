# Future Secure AI Test Framework

Playwright + TypeScript test project for the production site:

- Target: `https://www.futuresecure.ai`
- Review date for site structure in this repo: April 29, 2026
- Test style: POM + fixtures + smoke/regression tagging

## Project structure

```text
.
├── .github/workflows/          # CI pipelines
├── data/                       # Stable test data
├── docs/                       # Site analysis, locators, trends, CI notes
├── fixtures/                   # Shared Playwright fixtures
├── pages/                      # Page object models
├── tests/api/                  # HTTP-level checks
├── tests/ui/                   # Browser tests
├── playwright.config.ts
└── tsconfig.json
```

## Commands

```bash
npm test
npm run test:smoke
npm run test:regression
npm run test:api
npm run test:headed
npm run test:ui
npm run codegen
```

## Notes

- `BASE_URL` defaults to `https://www.futuresecure.ai`.
- This suite avoids real production form submissions.
- For locator discovery, start with `npm run codegen`, then refine to user-facing locators.

## Reference docs in this repo

- `docs/site-structure.md`
- `docs/locators.md`
- `docs/ci-cd-options.md`
- `docs/playwright-trends-2025.md`
