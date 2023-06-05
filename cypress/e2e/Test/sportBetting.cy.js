const {loginPage} = require("../../support/Pages/login.page");
const {CreditsPage} = require("../../support/Pages/credits.page");
const {email, password} = Cypress.env('DataUser');

describe('Test', {testIsolation: false},()=>{
    before(() => {
        cy.wait(10000);
        cy.visit('/');
    })
    it('Login User', ()=>{
        loginPage.clickBtnLogin();
        loginPage.clickBtnEmail();
        loginPage.clickBtnRemember();
        loginPage.enterEmail(email);
        loginPage.enterPassword(password);
        loginPage.submit();
    })
    it('Topping up funds in the account', ()=>{
        CreditsPage.clickBtnProfile();
        CreditsPage.clickBtnGoProfile();
        CreditsPage.clickBtnDeposit();
        CreditsPage.clickBtnDepositManual();
        CreditsPage.enterAmount('3000');
        CreditsPage.clickBtnBonus();
        cy.get('[data-test="control-submit"]').click();
        cy.get('.toast').should('be.visible');
    })
})