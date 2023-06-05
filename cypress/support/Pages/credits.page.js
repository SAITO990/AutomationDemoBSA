class BuyCredits {
    get = {
        btnProfile: () => cy.get('.user-avatar__wrapper'),
        btnGoProfile: () => cy.get('[data-test="nav-reg-head"]'),
        btnDeposit: () => cy.get('.profile-info__buttons > .button--t4'),
        btnDepositManualDep: () => cy.get('#withdraw-button-38'),
        amountInput: () => cy.get('[data-test="input-amount"]'),
        selectBonus: () => cy.get(':nth-child(3) > .special-radio__label')
    }

    clickBtnProfile(){
        this.get.btnProfile().click();
    }

    clickBtnGoProfile(){
        this.get.btnGoProfile().click();
    }

    clickBtnDeposit(){
        this.get.btnDeposit().click();
    }

    clickBtnDepositManual(){
        this.get.btnDepositManualDep().click();
    }

    enterAmount(amount){
        this.get.amountInput().type(amount);
    }

    clickBtnBonus(){
        this.get.selectBonus().click()
    }

    deposit(){
        this.get.btnDeposit().click()
    }
}

export const CreditsPage = new BuyCredits();