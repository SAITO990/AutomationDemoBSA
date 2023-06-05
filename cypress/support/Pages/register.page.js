class Register {
    // Properties / elements
  
    // Getters for various elements on the Register page
    // These getters retrieve the corresponding Cypress commands to interact with the elements
    get = {
      emailInput: () => cy.get('[data-test="input-email"]'), // Email input field
      termsCondition: () => cy.get('.input__wrapper > label'), // Terms and conditions checkbox
      currencyDropdown: () => cy.get('.input__wrapper > .selectric-wrapper > .selectric > .label'), // Currency dropdown
      passwordInput: () => cy.get('[data-test="input-password"]'), // Password input field
      passwordInputConfirmation: () => cy.get('[data-test="input-password_confirmation"]'), // Confirmation password input field
      promoCodeInput: () => cy.get('.form__input-wrapper > [data-test="input-promo_code"]'), // Promo code input field
      submitButton: () => cy.get('[data-test="control-submit"]'), // Submit button
    };
  
    // Functions / methods
  
    // Enters the username/email in the email input field
    enterUsername(data) {
      this.get.emailInput().type(data);
    }
  
    // Clicks on the terms and conditions checkbox
    termsAndConditions() {
      this.get.termsCondition().click();
    }
  
    // Selects an option from the currency dropdown
    // optionText: the text of the option to be selected
    selectCurrencyDropdown(optionText) {
      this.get.currencyDropdown().click();
      cy.contains('.selectric-scroll ul > li', optionText).click();
    }
  
    // Enters the password in the password input field
    enterPassword(data) {
      this.get.passwordInput().type(data);
    }
  
    // Enters the confirmation password in the confirmation password input field
    enterConfirmationPassword(data) {
      this.get.passwordInputConfirmation().type(data);
    }
  
    // Enters the promo code in the promo code input field
    enterPromoCode(code) {
      this.get.promoCodeInput().type(code);
    }
  
    // Clicks on the submit button to register
    submitRegister() {
      this.get.submitButton().click();
    }
  }
  
  // Exporting an instance of the Register class
  export const register = new Register();