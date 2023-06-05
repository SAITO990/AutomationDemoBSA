class BuyCredits {
    // Properties / elements
  
    // Getters for various elements on the Buy Credits page
    // These getters retrieve the corresponding Cypress commands to interact with the elements
    get = {
      btnProfile: () => cy.get('.user-avatar__wrapper'), // Profile button
      btnGoProfile: () => cy.get('[data-test="nav-reg-head"]'), // "Go to Profile" button
      btnDeposit: () => cy.get('.profile-info__buttons > .button--t4'), // Deposit button
      btnDepositManualDep: () => cy.get('#withdraw-button-38'), // Manual deposit button
      amountInput: () => cy.get('[data-test="input-amount"]'), // Amount input field
      selectBonus: () => cy.get(':nth-child(3) > .special-radio__label'), // Bonus selection
    };
  
    // Functions / methods
  
    // Clicks on the profile button
    clickBtnProfile() {
      this.get.btnProfile().click();
    }
  
    // Clicks on the "Go to Profile" button
    clickBtnGoProfile() {
      this.get.btnGoProfile().click();
    }
  
    // Clicks on the deposit button
    clickBtnDeposit() {
      this.get.btnDeposit().click();
    }
  
    // Clicks on the manual deposit button
    clickBtnDepositManual() {
      this.get.btnDepositManualDep().click();
    }
  
    // Enters the amount in the amount input field
    enterAmount(amount) {
      this.get.amountInput().type(amount);
    }
  
    // Clicks on the bonus selection
    clickBtnBonus() {
      this.get.selectBonus().click();
    }
  
    // Clicks on the deposit button to process the deposit
    deposit() {
      this.get.btnDeposit().click();
    }
  }
  
  // Exporting an instance of the BuyCredits class
  export const CreditsPage = new BuyCredits();