
# Nawy Test Automation Framework

[![Playwright](https://img.shields.io/badge/Playwright-2.4+-blue?logo=playwright)](https://playwright.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript)](https://www.typescriptlang.org)

Automation framework for testing Nawy's real estate platform ([https://www.nawy.com/](https://www.nawy.com/)). Built with Playwright and TypeScript using the Page Object Model (POM) design pattern for maintainable and scalable test automation. This framework incorporates **data-driven testing** and **dynamic data generation** to ensure comprehensive and flexible test coverage.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Quick Start](#quick-start)
- [Running Tests](#running-tests)
- [Reporting](#reporting)
- [About Page Automation](#about-page-automation)

## Features

- **Modern Stack**: Playwright + TypeScript
- **Page Object Model**: Clean separation of test logic and page interactions
- **Data-Driven Testing**: Supports testing with multiple data sets for comprehensive coverage
- **Dynamic Data Generation**: Uses Faker.js to create realistic, randomized test data
- **Cross-browser Testing**: Supports Chromium, Firefox, and WebKit
- **Parallel Execution**: Built-in test parallelization
- **CI/CD Ready**: GitHub Actions integration example
- **Interactive Reporting**: HTML test reports with screenshots and traces

## Project Structure

The project is organized into the following directories:

```
nawy-automation/
├── pages/
│   ├── HomePage.ts
│   └── AboutPage.ts    
├── tests/
│   ├── homePageTests.ts
│   └── aboutTest.spec.ts  
├── utils/
│   └── testData.ts    
├── playwright.config.ts
├── tsconfig.json
└── package.json
```

- **`pages/`**: Contains Page Object Model classes for each page (e.g., `HomePage.ts`, `AboutPage.ts`).
- **`tests/`**: Holds test suites for different pages (e.g., `homePageTests.ts`, `aboutTest.spec.ts`).
- **`utils/`**: Utility modules like `testData.ts` for generating random test data.
- **`playwright.config.ts`**: Configuration file for Playwright.
- **`tsconfig.json`**: TypeScript configuration.
- **`package.json`**: Project dependencies and scripts.

## Quick Start

### Prerequisites

- **Node.js 16+**: [Download](https://nodejs.org/)
- **npm 8+**

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
npx playwright test tests/aboutTest.spec.ts
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

Tests automatically generate:
- HTML reports with screenshots
- Video recordings of test runs
- Trace viewer for debugging

## About Page Automation

This section covers the automation specific to the About page of the Nawy website, including form submission and validation.

### `utils/testData.ts`

**Purpose**: Generates random form data for testing the "Need expert advice" form on the About page.

**Details**:
- Utilizes [Faker.js](https://fakerjs.dev/) to create realistic test data.
- Exports a `generateFormData` function that returns:
  - `name`: Random full name (e.g., "John Doe").
  - `compound`: Randomly selected from predefined compounds (e.g., "ZED", "Mountain View iCity October").
  - `phone`: Phone number starting with "011" followed by 8 random digits (e.g., "01123456789").
  - `message`: Random sentence with 5 to 12 words (e.g., "Looking for a luxury villa.").

**Usage**: Provides consistent, randomized input for form submission tests, ensuring repeatability and variety.

### `pages/AboutPage.ts`

**Purpose**: Encapsulates the About page's elements and interactions in a reusable class following the POM pattern.

**Details**:
- Defines an `ExpertAdviceFormData` interface for type-safe form data handling.
- Uses Playwright's `Locator` API to identify elements such as the page header, input fields, dropdown, and submit button.
- Key methods:
  - `openAboutPage()`: Navigates to the About page (assumed at `/about-us`).
  - `getAboutScreenHeaderText()`: Retrieves the header text for validation.
  - `submitExpertAdviceForm(formData)`: Fills and submits the "Need expert advice" form with provided data.
  - `selectCompound(compoundName)`: Selects a compound from the dropdown menu.
  - `waitForSubmission()`: Waits for the form submission to complete.
  - `getSuccessMessageText()`: Retrieves the success message after submission.

**Usage**: Abstracts all interactions with the About page, making tests cleaner and more maintainable.

### `tests/aboutTest.spec.ts`

**Purpose**: Contains automated test cases for the About page functionality.

**Details**:
- Built using Playwright's `test` framework for structured test authoring.
- Sets up a fresh `AboutPage` instance and generates new form data before each test to ensure independence.
- Test cases:
  1. **Navigate to About**: Verifies the page loads correctly by checking the header text as "About Nawy".
  2. **Submit Need expert advice form**: Submits the form with random data and confirms the success message contains "Thank You".

**Usage**: Validates the About page's core functionality in an automated, repeatable manner.

### Notes

- The About page is assumed to be accessible at `/about-us` with specific elements (e.g., header, form fields). Adjust locators in `AboutPage.ts` if the page structure changes.
- Fresh test data is generated for each test run to avoid data conflicts and ensure consistency.
- Screenshots and traces in the Playwright report aid in debugging About page test failures.