import { faker } from '@faker-js/faker';

export const generateFormData = () => {
    const compounds = ['Silversands', 'Cairo Gate', 'Mountain View iCity October', 'Palm Hills Golf Extension',
        'June','The Square','Mivida','ZED','SODIC East','O West Orascom' ];
    return {
        name: faker.person.fullName(),
        compound: faker.helpers.arrayElement(compounds),
        phone: `011 ${faker.string.numeric(8)}`,
        message: faker.lorem.sentence({ min: 5, max: 12 })

    };
};