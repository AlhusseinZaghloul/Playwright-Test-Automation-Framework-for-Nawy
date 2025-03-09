import { Page, Locator } from 'playwright';

export class AboutPage {
    private page: Page;
    private aboutHeader: Locator;
    private nameInput: Locator;
    private compoundSelect: Locator;
    private phoneInput: Locator;
    private messageInput: Locator;
    private submitButton: Locator;
    private successMessage: Locator;
  
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

    async submitExpertAdviceForm(name: string, compound: string, phone: string, message: string) {
            await this.nameInput.fill(name);
            await this.selectCompound(compound);
            await this.phoneInput.fill(phone);
            await this.messageInput.fill(message);
            await this.submitButton.click();
        }
    
    async selectCompound(compoundName: string) {
            await this.compoundSelect.click();
            await this.page.getByRole('option', { name: compoundName }).click();
        }
    
    async getSuccessMessageText() {
            return await this.successMessage.textContent();
        }   
}