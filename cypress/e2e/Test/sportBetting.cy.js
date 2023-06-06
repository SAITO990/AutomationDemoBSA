// Importing the necessary page objects
const { loginPage } = require("../../support/Pages/login.page");
const { CreditsPage } = require("../../support/Pages/credits.page");

// Retrieving the email and password from Cypress environment variables
const { email, password } = Cypress.env('DataUser');

Cypress.on('uncaught:exception', (err, runnable) => {
  // Permite que el error no capturado no haga que la prueba falle
  return false;
});

// Test suite
describe('Test',() => {

  // Setting up the initial state before running the tests
  before(() => {
    // Visiting the homepage
    cy.visit('/', {failOnStatusCode: false});
    cy.get('.modal__buttons > .button--t1').click();

    loginPage.clickBtnLogin();
    // Clicking on the email login option
    loginPage.clickBtnEmail();
    // Clicking on the "Remember Me" checkbox
    loginPage.clickBtnRemember();
    // Entering the email in the login form
    loginPage.enterEmail(email);
    // Entering the password in the login form
    loginPage.enterPassword(password);
    // Submitting the login form
    loginPage.submit();
  });

  // Test case for topping up funds in the account
  it('Topping up funds in the account', () => {
    // Clicking on the profile button
    CreditsPage.clickBtnProfile();
    // Clicking on the "Go to Profile" button
    CreditsPage.clickBtnGoProfile();
    // Clicking on the deposit button
    CreditsPage.clickBtnDeposit();
    // Clicking on the manual deposit option
    CreditsPage.clickBtnDepositManual();
    // Entering the amount for the deposit
    CreditsPage.enterAmount('3000');
    // Clicking on the bonus button
    CreditsPage.clickBtnBonus();
    // Clicking on the submit button to process the deposit
    cy.get('[data-test="control-submit"]').click();
    // Verifying if the success toast notification is visible
    cy.get('.toast').should('be.visible');
  });
});