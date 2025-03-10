import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage'; 
import { AboutPage } from '../pages/AboutPage';


test.describe('Nawy Homepage Tests', () => {
    let homePage: HomePage;
    let aboutPage: AboutPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate();
    });

    test('verifies homepage loads correctly', { tag: '@Smoke' }, async () => {
        const title = await homePage.getPageTitle();
        expect(title).toBe('Your Home In A Compound');
    });
    
    
    test('navigate to About', async ({ page }) => {
    await homePage.navigateToAbout();
    aboutPage= new AboutPage(page);
    expect(await aboutPage.getAboutScreenHeaderText()).toBe('About Nawy');
});
    
});