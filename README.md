# Nawy Test Automation Framework

This project is a test automation framework for the Nawy website ([https://www.nawy.com/](https://www.nawy.com/)), built using Playwright with TypeScript. It follows the Page Object Model (POM) design pattern to ensure maintainability and readability.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Additional Notes](#additional-notes)

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

- **`pages/`**: Contains page object classes that encapsulate the elements and actions of specific pages on the Nawy website.
- **`tests/`**: Contains test files that use the page objects to verify the functionality of the website.
- **`playwright.config.ts`**: Configuration file for Playwright's test runner.
- **`tsconfig.json`**: TypeScript configuration.
- **`package.json`**: Project metadata and scripts.

## Setup

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your system. You can download it from [nodejs.org](https://nodejs.org).
- **Terminal**: Use a terminal or command-line interface to run setup commands.

### Steps

1. **Clone the Repository**:
   - Clone this repository to your local machine:
     ```bash
     git clone https://github.com/your-repo/nawy-automation.git
     cd nawy-automation
     ```

2. **Install Dependencies**:
   - Install the required dependencies:
     ```bash
     npm install
     ```

3. **Initialize TypeScript**:
   - If not already present, generate a `tsconfig.json` file:
     ```bash
     npx tsc --init
     ```

## Running Tests

To run the tests, use the following command:

```bash
npx playwright test
```

This will execute all the tests in the `tests/` directory using Playwright's test runner.

### Additional Options

- **Headed Mode**: To run tests in headed mode (with a visible browser), use:
  ```bash
  npx playwright test --headed
  ```

- **Specific Test File**: To run a specific test file, use:
  ```bash
  npx playwright test tests/homePageTests.ts
  ```

- **Debug Mode**: To run tests in debug mode, use:
  ```bash
  npx playwright test --debug
  ```

## Writing Tests

### Page Object Model (POM)

The framework uses the Page Object Model design pattern. Each page object class (e.g., `HomePage.ts`) encapsulates the elements and actions of a specific page, making the tests more readable and maintainable.



### Adding New Tests

1. **Create a Page Object**:
   - If the page doesn't already have a page object, create a new class in the `pages/` directory.
   - Define locators and methods for interacting with the page.

2. **Write Tests**:
   - Create a new test file in the `tests/` directory or add to an existing one.
   - Use the page object to interact with the page and make assertions.

## Additional Notes

- **Selector Accuracy**: The selectors in the page objects are placeholders. Use Playwright's `codegen` tool to inspect the page and update the selectors:
  ```bash
  npx playwright codegen https://www.nawy.com
  ```

- **SPA Handling**: If the Nawy website is a Single Page Application (SPA), you may need to adjust the navigation waits in the page object methods.

- **Extending the Framework**: The framework is designed to be scalable. Add new page objects and test files as needed to cover more functionality.

