import { getGreeting } from '../support/app.po';
describe('Hello Nx', function () {
    beforeEach(function () { return cy.visit('/'); });
    it('should display welcome message', function () {
        getGreeting().contains('Welcome to web-myapp!');
    });
});
