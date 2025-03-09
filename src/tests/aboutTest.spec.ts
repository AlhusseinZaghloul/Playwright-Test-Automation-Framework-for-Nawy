import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/AboutPage';

test.describe('Nawy About page Tests', () => {
 
    let aboutPage: AboutPage;

    test.beforeEach(async ({ page }) => {
        aboutPage = new AboutPage(page);
        await aboutPage.openAboutPage()
    });

    test('navigate to About', async ({ page }) => {
        expect(await aboutPage.getAboutScreenHeaderText()).toBe('About Nawy');
        });

    test('Submit Need expert advice form', async ({ page }) => {
    
        await aboutPage.submitExpertAdviceForm(
            'ABC Test',
            'Silversands',
            '011 01424253',
            'Hello this is just a test'
        );
        
        const successText = await aboutPage.getSuccessMessageText();
        expect(successText).toContain('Thank You');

        });
    
    
    
});