import { Page, Locator } from 'playwright';

// Interface for type safety
export interface ExpertAdviceFormData {
    name: string;
    compound: string;
    phone: string;
    message: string;
  }
export class AboutPage {
    private readonly page: Page;

    // Locators
    private readonly aboutHeader: Locator;
    private readonly nameInput: Locator;
    private readonly compoundSelect: Locator;
    private readonly phoneInput: Locator;
    private readonly messageInput: Locator;
    private readonly submitButton: Locator;
    private readonly successMessage: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.aboutHeader=page.getByRole('heading', { name: 'About Nawy' });
        this.nameInput = page.getByRole('textbox', { name: 'Your Name' });
        this.compoundSelect = page.getByRole('combobox', { name: 'compound-select' });
        this.phoneInput = page.getByRole('textbox', { name: 'Phone Number' });
        this.messageInput = page.getByRole('textbox', { name: 'Your message' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('div').filter({ hasText: 'Thank YouYour submission has' }).nth(2);
    }


    async openAboutPage() {
         await this.page.goto('/about-us');
        }

    async getAboutScreenHeaderText() {
        return await this.aboutHeader.textContent();
        }

        async submitExpertAdviceForm(formData: ExpertAdviceFormData) {
            await this.nameInput.fill(formData.name);
            await this.selectCompound(formData.compound);
            await this.phoneInput.fill(formData.phone);
            await this.messageInput.fill(formData.message);
            await this.submitButton.click();
            await this.waitForSubmission();
          }
    
    private async selectCompound(compoundName: string) {
            await this.compoundSelect.click();
            await this.page.getByRole('option', { name: compoundName }).click();
        }
    private async waitForSubmission() {
            await this.page.waitForSelector('div:has-text("Thank You")', { state: 'visible' });
          }
    
     async getSuccessMessageText() {
            return await this.successMessage.textContent();
        }   
}