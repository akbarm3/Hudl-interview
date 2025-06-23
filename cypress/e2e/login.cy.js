import loginPage from '../pageObjects/loginPage';
//this file contains tests for the Hudl login functionality

describe('Hudl Login Tests', () => {
    beforeEach(() => {
        loginPage.visit();
    });

    it('should show error with incorrect email format', () => {
        loginPage
            .enterEmail(Cypress.env('incorrectEmailFormat'))
            .assertIncorrectEmailFormatMessage()
    });

    it('should show error with invalid credentials', () => {
        loginPage
            .enterEmail(Cypress.env('invalidEmail'))
            .enterPassword(Cypress.env('invalidPassword'))
            .assertInvalidLoginMessage();
    });

    it('should show error with correct email and wrong password', () => {
        loginPage
            .enterEmail(Cypress.env('validEmail'))
            .enterPassword(Cypress.env('invalidPassword'))
            .assertInvalidPasswordMessage();
    });

    it('should show error with incorrect email and valid password', () => {
        loginPage
            .enterEmail(Cypress.env('invalidEmail'))
            .enterPassword(Cypress.env('validPassword'))
            .assertInvalidLoginMessage();
    });

    it('should login successfully with valid credentials', () => {
        loginPage
            .enterEmail(Cypress.env('validEmail'))
            .enterPassword(Cypress.env('validPassword'))
            .assertSuccessfulLogin();
    });

});
