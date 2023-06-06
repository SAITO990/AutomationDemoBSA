const { loginPage } = require("../../support/Pages/login.page");
const { CreditsPage } = require("../../support/Pages/credits.page");

const { email, password } = Cypress.env('DataUser');

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevents uncaught errors from causing test failures
  return false;
});

describe('Topping up funds to the account',() => {

  before(() => {
    // Visit the homepage
    cy.visit('/', {failOnStatusCode: false});

    // Click on a button with class '.button--t1' inside an element with class '.modal__buttons'
    cy.get('.modal__buttons > .button--t1').click();

    // Click on the login button
    loginPage.clickBtnLogin();

    // Click on the email login option
    loginPage.clickBtnEmail();

    // Click on the "Remember Me" checkbox
    loginPage.clickBtnRemember();

    // Enter the email in the login form
    loginPage.enterEmail(email);

    // Enter the password in the login form
    loginPage.enterPassword(password);

    // Submit the login form
    loginPage.submit();
  });

  it('Topping up funds in the account', () => {
    // Click on the profile button
    CreditsPage.clickBtnProfile();

    // Click on the "Go to Profile" button
    CreditsPage.clickBtnGoProfile();

    // Click on the deposit button
    CreditsPage.clickBtnDeposit();

    // Click on the manual deposit option
    CreditsPage.clickBtnDepositManual();

    // Enter the amount for the deposit
    CreditsPage.enterAmount('3000');

    // Click on the bonus button
    CreditsPage.clickBtnBonus();

    // Click on the submit button to process the deposit
    cy.get('[data-test="control-submit"]').click();
  
    // Verify if the success toast notification is visible
    cy.get('.toast').should('be.visible');
  });
});