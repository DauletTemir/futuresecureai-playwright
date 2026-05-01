# CI/CD Options

## Recommended default

Use a two-layer pipeline:

1. PR smoke suite on Chromium only
2. Nightly cross-browser regression on Chromium, Firefox, and WebKit

Why:

- Fast feedback on pull requests
- Lower browser-install cost on every commit
- Broader browser confidence on a schedule
- Good fit for a production site owned outside this repo

## Option 1: GitHub Actions

Already scaffolded in `.github/workflows/playwright.yml`.

Best when:

- Source control is on GitHub
- Team wants quick setup and artifact uploads

## Option 2: GitLab CI

Best when:

- Repo or enterprise runners already live in GitLab
- Team wants shared runners and environment controls

Suggested stages:

- install
- smoke
- regression
- report

## Option 3: Jenkins

Best when:

- Corporate network rules are strict
- Browsers must run on self-hosted agents
- External-site allowlists or proxies are needed

## Option 4: Azure DevOps

Best when:

- Team already uses Microsoft-hosted pipelines
- Work items, test evidence, and approvals live in Azure

## CI notes for this site

- Keep production tests read-only.
- Add retries conservatively because external sites can have transient failures.
- Store HTML report, traces, screenshots, and videos as artifacts.
- If rate limiting appears, reduce schedule frequency and parallelism.
