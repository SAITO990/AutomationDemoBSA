// Importing the necessary page object
const { register } = require('../../support/Pages/register.page');

// Retrieving the required endpoints and data from Cypress environment variables
const { registerPage } = Cypress.env('endpoint');
const { email, currency, password, confirmPassword } = Cypress.env('DataUser');

Cypress.on('uncaught:exception', (err, runnable) => {
  // Permite que el error no capturado no haga que la prueba falle
  return false;
});
// Test suite for user registration
describe('User Register', () => {
  // Setting up the initial state before running the tests
  before(() => {

    // Visiting the registration page
    cy.visit(registerPage, {failOnStatusCode: false});

    // Verifying if the URL contains the expected register page URL
    cy.url().should('contain', registerPage);
  });

  // Test case for successful registration
  it('register successfully', () => {
    cy.wait(5000)
    cy.get('.modal__buttons > .button--t1').click();
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