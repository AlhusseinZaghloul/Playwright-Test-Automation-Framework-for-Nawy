import { faker } from '@faker-js/faker';

/**
 * Generates random form data for testing purposes.
 * @returns {Object} An object containing name, compound, phone, and message.
 */
export const generateFormData = () => {
    // List of predefined compounds for random selection
    const compounds = [
        'Silversands', 'Cairo Gate', 'Mountain View iCity October', 'Palm Hills Golf Extension',
        'June', 'The Square', 'Mivida', 'ZED', 'SODIC East', 'O West Orascom'
    ];
    
    return {
        // Generate a random full name using Faker
        name: faker.person.fullName(),
        // Randomly select a compound from the compounds array
        compound: faker.helpers.arrayElement(compounds),
        // Create a phone number starting with '011' followed by 8 random digits
        phone: `011 ${faker.string.numeric(8)}`,
        // Generate a random sentence with 5 to 12 words
        message: faker.lorem.sentence({ min: 5, max: 12 })
    };
};