import { Page, Locator } from 'playwright';

export class AreaPage {
    private page: Page;
    private areaName: string;
    private header: Locator;
    private searchInput: Locator;
    private searchButton: Locator;
    private propertyCards: Locator;

    constructor(page: Page, areaName: string) {
        this.page = page;
        this.areaName = areaName;
        this.header = page.locator('h1');
        this.searchInput = page.locator('#search-input');
        this.searchButton = page.locator('#search-button');
        this.propertyCards = page.locator('.property-card');
    }

    /** Navigate to the area page */
    async navigate(): Promise<void> {
        await this.page.goto(`/area/${this.areaName}`);
    }

    /** Get the header text */
    async getHeaderText(): Promise<string> {
        return await this.header.textContent() || '';
    }

    /** Perform a search */
    async search(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }

    /** Count visible property cards */
    async getPropertyCount(): Promise<number> {
        return await this.propertyCards.count();
    }
}