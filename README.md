# Nawy Test Automation Framework

Automation framework for testing Nawy's real estate platform ([https://www.nawy.com/](https://www.nawy.com/)). Built with **Playwright** and **TypeScript** using the Page Object Model (POM) design pattern for maintainable and scalable test automation. This framework incorporates **data-driven testing** and **dynamic data generation** to ensure comprehensive and flexible test coverage.

## Table of Contents

- [Features](#features)  
- [Project Structure](#project-structure)  
- [Prerequisites](#prerequisites)  
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

## Prerequisites

To run and contribute to this project, ensure the following tools are installed on your device:

1. **Git**: For version control and cloning the repository. [Download Git](https://git-scm.com/downloads) or [Download GitHub Desktop](https://desktop.github.com/).
2. **Visual Studio Code (VS Code)**: Recommended IDE for editing and debugging. [Download VS Code](https://code.visualstudio.com/download).
3. **Node.js**: Runtime environment (version 16+ recommended). [Download Node.js](https://nodejs.org/en/download/).
4. **Playwright**: Testing framework; install via npm and VS Code plugin. [Installing Playwright for VS Code](https://playwright.dev/docs/getting-started-vscode).


*Note*: Always download the latest stable versions compatible with your operating system and CPU architecture.


## Quick Start

### Initial Setup

1. **Clone Repository**  
   ```bash
   git clone https://github.com/AlhusseinZaghloul/Playwright-Test-Automation-Framework-for-Nawy.git

   cd Playwright-Test-Automation-Framework-for-Nawy
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Install Playwright Browsers**  
   ```bash
   npx playwright install
   ```

4. **Open in VS Code**  
   - Launch VS Code and open the project folder via `File > Open Folder...`

### IDE Configuration

- Ensure the Playwright extension is enabled in VS Code.  
- Install recommended extensions from the VS Code prompt (if shown).  

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

This section outlines the automation of Nawy’s About page as an example of how the framework manages page interactions, form submissions, and validations. The approach utilizes the **Page Object Model (POM)** and **data-driven testing** to ensure the automation is reliable, maintainable, and repeatable across various test scenarios.

### Key Components

- **`utils/testData.ts`**  
  - **Purpose**: Creates randomized form data specifically for testing the "Need expert advice" form on the About page.  
  - **Details**:  
    - Uses [Faker.js](https://fakerjs.dev/) to generate realistic and varied test inputs.  
    - Provides a `generateFormData` function that returns:  
      - `name`: A random full name (e.g., "John Doe").  
      - `compound`: A predefined property type from options like "ZED" or "Mountain View iCity October".  
      - `phone`: A phone number starting with "011" followed by 8 random digits (e.g., "01123456789").  
      - `message`: A random sentence between 5 and 12 words (e.g., "Looking for a luxury villa.").  
  - **Usage**: Supplies consistent and unique data for form testing, ensuring no overlap or conflicts between test runs.  

- **`pages/AboutPage.ts`**  
  - **Purpose**: Manages interactions with the About page using the POM design pattern.  
  - **Details**:  
    - Defines an `ExpertAdviceFormData` interface to ensure type-safe handling of form data.  
    - Uses Playwright’s `Locator` API to interact with page elements such as the header, input fields, dropdown, and submit button.  
    - Key methods include:  
      - `openAboutPage()`: Navigates to the `/about-us` URL.  
      - `getAboutScreenHeaderText()`: Retrieves the header text for validation purposes.  
      - `submitExpertAdviceForm(formData)`: Populates and submits the "Need expert advice" form using provided data.  
      - `selectCompound(compoundName)`: Chooses a specific compound from the dropdown menu.  
      - `waitForSubmission()`: Pauses execution until the form submission completes.  
      - `getSuccessMessageText()`: Captures the success message shown after submission.  
  - **Usage**: Encapsulates page-specific logic, making tests easier to write and maintain.  

- **`tests/aboutTest.spec.ts`**  
  - **Purpose**: Automates test cases to confirm the About page functions as expected.  
  - **Details**:  
    - Built with Playwright’s `test` framework, each test starts with a fresh `AboutPage` instance and newly generated form data.  
    - Test cases include:  
      1. **Navigate to About**: Ensures the page loads correctly by verifying the header text is "About Nawy".  
      2. **Submit Need expert advice form**: Fills the form with random data and checks that the success message contains "Thank You".  
  - **Usage**: Validates the About page’s essential features consistently across independent test runs.  

### Implementation Notes

- Selectors for form elements in `AboutPage.ts` are chosen based on the best practices recommended in the official [Playwright Best Practices](https://playwright.dev/docs/best-practices) documentation to ensure they are resilient to changes in the DOM structure.  
- Randomized data generation ensures test isolation, preventing interference between test runs.  

---
This framework demonstrates robust automation capabilities, effectively handling page interactions and validations, providing a reliable and scalable testing solution for Nawy’s About page.
