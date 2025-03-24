import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage';
import { generateFormData } from '../utils/testData';

// Test suite for validating the Nawy About page functionality
test.describe('Nawy About page Tests', () => {
    let aboutPage: AboutPage;                  // Instance of the AboutPage class
    let formData: ReturnType<typeof generateFormData>; // Randomly generated form data

    /**
     * Setup executed before each test: initializes the page and generates fresh form data.
     * @param {Page} page - The Playwright page instance.
     */
    test.beforeEach(async ({ page }) => {
        aboutPage = new AboutPage(page);
        await aboutPage.openAboutPage();
        formData = generateFormData(); // Generate new data for each test run
    });

    /**
     * Tests navigation to the About page and verifies the header text.
     */
    test('navigate to About', { tag: '@Smoke' }, async ({ page }) => {
        const headerText = await aboutPage.getAboutScreenHeaderText();
        expect(headerText).toBe('About Nawy'); // Assert the header is correct
    });

    /**
     * Tests submitting the "Need expert advice" form and verifies the success message.
     */
    test('Submit Need expert advice form', { tag: ['@Smoke', '@Regression'] } , async ({ page }) => {
        // Log test data for debugging
        console.log('Using test data:', formData); 

        // Submit the form
        await aboutPage.submitExpertAdviceForm(formData); 
        // Get success message text
        const successText = await aboutPage.getSuccessMessageText(); 
        // Verify success message appears
        expect(successText).toContain('Thank You'); 
    });
});
