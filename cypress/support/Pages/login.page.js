class Login {

    get = {     
        btnLogin: () => cy.get('.login'),
        btnLoginEmail: () => cy.get('[data-test="nav-login-head"]'),
        emailInput: () => cy.get('[data-test="input-username"]'),
        passwordInput: () => cy.get('[data-test="input-password"]'),
        rememberBtn: () => cy.get('.input__wrapper > label'),
        submitBtn: () => cy.get('[data-test="control-submit"]')
    }

    clickBtnLogin(){
        this.get.btnLogin().click();
    }

    clickBtnEmail(){
        this.get.btnLoginEmail().click();
    }

    enterEmail(email){
        this.get.emailInput().type(email);
    }

    enterPassword(password){
        this.get.passwordInput().type(password);
    }

    clickBtnRemember(){
        this.get.rememberBtn().click();
    }

    submit(){
        this.get.submitBtn().click();
    }
}

export const loginPage = new Login();