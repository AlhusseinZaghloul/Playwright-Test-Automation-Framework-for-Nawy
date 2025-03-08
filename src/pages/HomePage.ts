import { Page, Locator } from 'playwright';

export class HomePage {
    private page: Page;
    private searchInput: Locator;
    private searchButton: Locator;
    private pageTitle: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.locator('#search-input');
        this.searchButton = page.locator('#search-button');
        this.pageTitle = page.locator('h1');
    }

    /** Navigate to the homepage */
    async navigate(): Promise<void> {
        await this.page.goto('/');
    }

    /** Get the text of the page title */
    async getPageTitle(): Promise<string | null> {
        return await this.pageTitle.textContent();
    }

   
}