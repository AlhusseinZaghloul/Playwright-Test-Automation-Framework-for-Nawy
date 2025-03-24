import { test, expect } from '@playwright/test';
import { AreaPage } from '../pages/AreaPage';

test.describe('Mostakbal City Area Tests', () => {
    let areaPage: AreaPage;

    // Setup before each test
    test.beforeEach(async ({ page }) => {
        areaPage = new AreaPage(page, 'mostakbal-city');
        await areaPage.navigate();
    });

    test('verifies page loads with correct header', { tag: ['@Smoke', '@Regression'] }, async ({page}) => {
        
        await expect.soft(areaPage.header).toContainText('Mostakbal City');
        const pageContent = page.locator('[id="__next"]');
        await expect(pageContent).not.toBeEmpty();
    });

    
   
});