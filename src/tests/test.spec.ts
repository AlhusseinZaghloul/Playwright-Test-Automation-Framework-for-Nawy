import { test, expect } from '@playwright/test';
import { AreaPage } from '../pages/AreaPage';

test.describe('Mostakbal City Area Tests', () => {
    let areaPage: AreaPage;

    // Setup before each test
    test.beforeEach(async ({ page }) => {
        areaPage = new AreaPage(page, 'mostakbal-city');
        await areaPage.navigate();
    });

    test('verifies page loads with correct header', async () => {
        const headerText = await areaPage.getHeaderText();
        // Expecting the header to contain "Mostakbal City"
        expect(headerText).toContain('Mostakbal City');
    });

    test('verifies search returns properties', async () => {
        // Perform a search for "luxury apartments"
        await areaPage.search('luxury apartments');
        // Wait for properties to load
        await areaPage.page.waitForSelector('.property-card');
        const propertyCount = await areaPage.getPropertyCount();
        // Expect at least one property to be displayed
        expect(propertyCount).toBeGreaterThan(0);
    });
});