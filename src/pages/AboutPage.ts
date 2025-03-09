import { Page, Locator } from 'playwright';

// Interface to enforce type safety for form data
export interface ExpertAdviceFormData {
    name: string;
    compound: string;
    phone: string;
    message: string;
}

/**
 * Represents the About page of the Nawy website, providing methods to interact with its elements.
 */
export class AboutPage {
    private readonly page: Page;

    // Locators for key elements on the About page
    private readonly aboutHeader: Locator;      // Header text of the About page
    private readonly nameInput: Locator;        // Input field for user's name
    private readonly compoundSelect: Locator;   // Dropdown for selecting a compound
    private readonly phoneInput: Locator;       // Input field for phone number
    private readonly messageInput: Locator;     // Input field for user's message
    private readonly submitButton: Locator;     // Button to submit the form
    private readonly successMessage: Locator;   // Success message displayed after submission

    /**
     * Initializes the AboutPage with a Playwright page instance.
     * @param {Page} page - The Playwright page object to interact with.
     */
    constructor(page: Page) {
        this.page = page;
        this.aboutHeader = page.getByRole('heading', { name: 'About Nawy' });
        this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
        this.compoundSelect = page.getByRole('combobox', { name: 'compound-select' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone Number' });
        this.messageInput = page.getByRole('textbox', { name: 'Your message' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('div').filter({ hasText: 'Thank YouYour submission has' }).nth(2);
    }

    /**
     * Navigates to the About page of the website.
     */
    async openAboutPage() {
        await this.page.goto('/about-us');
    }

    /**
     * Retrieves the text content of the About page header.
     * @returns {Promise<string | null>} The header text.
     */
    async getAboutScreenHeaderText() {
        return await this.aboutHeader.textContent();
    }

    /**
     * Fills and submits the "Need expert advice" form with provided data.
     * @param {ExpertAdviceFormData} formData - The data to populate the form fields.
     */
    async submitExpertAdviceForm(formData: ExpertAdviceFormData) {
        await this.nameInput.fill(formData.name);
        await this.selectCompound(formData.compound);
        await this.phoneInput.fill(formData.phone);
        await this.messageInput.fill(formData.message);
        await this.submitButton.click();
        await this.waitForSubmission();
    }

    /**
     * Selects a specific compound from the dropdown menu.
     * @param {string} compoundName - The name of the compound to select.
     */
    private async selectCompound(compoundName: string) {
        await this.compoundSelect.click();
        await this.page.getByRole('option', { name: compoundName }).click();
    }

    /**
     * Waits for the form submission to complete by checking for the success message.
     */
    private async waitForSubmission() {
        await this.page.waitForSelector('div:has-text("Thank You")', { state: 'visible' });
    }

    /**
     * Retrieves the text of the success message after form submission.
     * @returns {Promise<string | null>} The success message text.
     */
    async getSuccessMessageText() {
        return await this.successMessage.textContent();
    }
}