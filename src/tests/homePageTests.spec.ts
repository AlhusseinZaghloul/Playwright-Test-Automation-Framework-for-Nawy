import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; // Adjust path based on your project structure

test.describe('Nawy Homepage Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('verifies homepage loads correctly', async () => {
        const title = await homePage.getPageTitle();
        expect(title).toBe('Your Home In A Compound');
    });

    
});