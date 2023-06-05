class Login {
    // Properties / elements
  
    // Getters for various elements on the Login page
    // These getters retrieve the corresponding Cypress commands to interact with the elements
    get = {
      btnLogin: () => cy.get('.login'), // Login button
      btnLoginEmail: () => cy.get('[data-test="nav-login-head"]'), // Email login button
      emailInput: () => cy.get('[data-test="input-username"]'), // Email input field
      passwordInput: () => cy.get('[data-test="input-password"]'), // Password input field
      rememberBtn: () => cy.get('.input__wrapper > label'), // "Remember Me" checkbox
      submitBtn: () => cy.get('[data-test="control-submit"]'), // Submit button
    };
  
    // Functions / methods
  
    // Clicks on the login button
    clickBtnLogin() {
      this.get.btnLogin().click();
    }
  
    // Clicks on the email login button
    clickBtnEmail() {
      this.get.btnLoginEmail().click();
    }
  
    // Enters the email in the email input field
    enterEmail(email) {
      this.get.emailInput().type(email);
    }
  
    // Enters the password in the password input field
    enterPassword(password) {
      this.get.passwordInput().type(password);
    }
  
    // Clicks on the "Remember Me" checkbox
    clickBtnRemember() {
      this.get.rememberBtn().click();
    }
  
    // Submits the login form
    submit() {
      this.get.submitBtn().click();
    }
  }
  
  // Exporting an instance of the Login class
  export const loginPage = new Login();