import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage';
import { generateFormData } from '../utils/testData';

test.describe('Nawy About page Tests', () => {
 
    let aboutPage: AboutPage;
    let formData: ReturnType<typeof generateFormData>;

    test.beforeEach(async ({ page }) => {
        aboutPage = new AboutPage(page);
        await aboutPage.openAboutPage()
        // Generate new data for each test run
        formData = generateFormData();
});
    

    test('navigate to About', async ({ page }) => {
        expect(await aboutPage.getAboutScreenHeaderText()).toBe('About Nawy');
        });

    test('Submit Need expert advice form', async ({ page }) => {
        console.log('Using test data:', formData); // For debugging purposes
    
        await aboutPage.submitExpertAdviceForm(formData);
        const successText = await aboutPage.getSuccessMessageText();
        expect(successText).toContain('Thank You');
    
        });
});