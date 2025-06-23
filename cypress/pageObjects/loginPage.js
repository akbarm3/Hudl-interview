import selectors from '../selectors/loginSelectors';

class LoginPage {

    visit() {
        cy.visit(Cypress.env('loginUrl'));
        return this;
    }

    enterEmail(email) {
        cy.get(selectors.emailInput).type(email);
        cy.contains('Continue').click();
        return this;
    }

    enterPassword(password) {
        cy.get(selectors.passwordInput).type(password);
        cy.contains('Continue').click();
        return this;

    }

    assertInvalidLoginMessage() {
        cy.get(selectors.errorMessage)
            .should('be.visible')
            .and('contain.text', 'Incorrect username or password');
        return this;
    }
    assertIncorrectEmailFormatMessage() {
        cy.get(selectors.errorMessageEmail)
            .should('be.visible')
            .and('contain.text', 'Enter a valid email');
        return this;
    }

    assertInvalidPasswordMessage() {
        cy.get(selectors.errorMessage)
            .should('be.visible')
            .and('contain.text', 'Your email or password is incorrect. Try again');
        return this;
    }

    assertSuccessfulLogin() {
        cy.url().should('not.include', '/login');
        cy.origin('https://www.hudl.com/home', () => {
            cy.get('body').should('be.visible')
                .and('contain.text', 'Home');

        })
        return this;
    }

}

export default new LoginPage();