
# Nawy Test Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-2.4+-blue?logo=playwright)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript)](https://www.typescriptlang.org)

Automation framework for testing Nawy's real estate platform ([https://www.nawy.com/](https://www.nawy.com/)). Built with Playwright and TypeScript using Page Object Model (POM) design pattern for maintainable and scalable test automation.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Running Tests](#running-tests)
- [Reporting](#reporting)

## Features

- **Modern Stack**: Playwright + TypeScript
- **Page Object Model**: Clean separation of test logic and page interactions
- **Cross-browser Testing**: Supports Chromium, Firefox, and WebKit
- **Parallel Execution**: Built-in test parallelization
- **CI/CD Ready**: GitHub Actions integration example
- **Interactive Reporting**: HTML test reports with screenshots and traces

## Project Structure


The project is organized into the following directories:

```
nawy-automation/
├── pages/
│   └── HomePage.ts
├── tests/
│   └── homePageTests.ts
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

## Quick Start

### Prerequisites

- Node.js 16+ [Download](https://nodejs.org/)
- npm 8+

### Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/nawy-automation.git
   cd nawy-automation
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**
   ```bash
   npx playwright install
   ```

## Running Tests

**Run All Tests**
```bash
npm test
```

**Run Specific Test Suite**
```bash
npx playwright test tests/homePageTests.ts
```

**Run in Headed Mode**
```bash
npx playwright test --headed
```

**Debug Tests**
```bash
npx playwright test --debug
```

**Cross-browser Testing**
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```



## Reporting

**View HTML Report**
```bash
npx playwright show-report
```

![Playwright Report](https://playwright.dev/img/playwright-report.svg)

Tests automatically generate:
- HTML reports with screenshots
- Video recordings of test runs
- Trace viewer for debugging
```