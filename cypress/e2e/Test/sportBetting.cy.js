// Importing the necessary page objects
const { loginPage } = require("../../support/Pages/login.page");
const { CreditsPage } = require("../../support/Pages/credits.page");

// Retrieving the email and password from Cypress environment variables
const { email, password } = Cypress.env('DataUser');

// Test suite
describe('Test', { testIsolation: false }, () => {

  // Setting up the initial state before running the tests
  before(() => {
    // Adding a delay of 10 seconds to ensure stability
    cy.wait(10000);
    // Visiting the homepage
    cy.visit('/');
  });

  // Test case for user login
  it('Login User', () => {
    // Clicking on the login button
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