// Importing the necessary page object
const { register } = require('../../support/Pages/register.page');

// Retrieving the required endpoints and data from Cypress environment variables
const { registerPage, successfullyRegister } = Cypress.env('endpoint');
const { email, currency, password, confirmPassword } = Cypress.env('DataUser');

// Test suite for user registration
describe('User Register', () => {
  // Setting up the initial state before running the tests
  before(() => {
    // Adding a delay of 10 seconds to ensure stability
    cy.wait(10000);

    // Visiting the registration page
    cy.visit(registerPage);

    // Verifying if the URL contains the expected register page URL
    cy.url().should('contain', registerPage);
  });

  // Test case for successful registration
  it('register successfully', () => {
    // Entering the username/email in the registration form
    register.enterUsername(email);

    // Accepting the terms and conditions
    register.termsAndConditions();

    // Selecting the currency from the dropdown
    register.selectCurrencyDropdown(currency);

    // Entering the password in the registration form
    register.enterPassword(password);

    // Entering the confirmation password in the registration form
    register.enterConfirmationPassword(confirmPassword);

    // Submitting the registration form
    register.submitRegister();

    // Verifying if the success notification is visible
    cy.get('.notification__content').should('be.visible');
  });
});