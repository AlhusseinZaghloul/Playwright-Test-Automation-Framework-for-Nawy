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
        expect(headerText).toContain('Mostakbal City');
    });

    test('verifies search returns properties', async () => {
        await areaPage.search('luxury apartments');
        const propertyCount = await areaPage.getPropertyCount();
        expect(propertyCount).toBeGreaterThan(0);
    });
});