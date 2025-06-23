// This file contains the selectors used in the login page tests.
const loginSelectors = {
    emailInput: '#username',
    passwordInput: '#password',
    continueButton: 'button[type="submit"]',
    errorMessage: '#error-element-password',
    errorMessageEmail: '#error-element-username',
    forgotPasswordLink: 'a[href*="reset"]',
    resetEmailInput: 'input#email',
    resetSubmitButton: 'button[type="submit"]',
    resetConfirmationText: 'div.reset-message',
    homePageUser:'class="hui-globaluseritem"',


};

export default loginSelectors;
