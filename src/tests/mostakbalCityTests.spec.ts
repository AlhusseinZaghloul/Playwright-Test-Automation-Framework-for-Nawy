import { test, expect } from '@playwright/test';
import { AreaPage } from '../pages/AreaPage';

test.describe('Mostakbal City Area Tests', () => {
    let areaPage: AreaPage;

    // Setup before each test
    test.beforeEach(async ({ page }) => {
        areaPage = new AreaPage(page, 'mostakbal-city');
        await areaPage.navigate();
    });

    test('verifies page loads with correct header', async ({page}) => {
        const headerText = await areaPage.getHeaderText();
        await expect(headerText).toContain('Mostakbal City');
    
        const locator = page.locator('[id="__next"]');
        const textContent = await locator.textContent();
        await expect.soft(textContent).not.toBeNull();
        await expect.soft(textContent).not.toBe('');
    });

    test('verifies search returns properties', async () => {

        await areaPage.search('luxury apartments');
        const propertyCount = await areaPage.getPropertyCount();
        expect(propertyCount).toBeGreaterThan(0);
    });
});