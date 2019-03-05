import { getGreeting } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {

    // start applitools test
    (<any>cy).eyesOpen({
      appName: 'myapp',
      testName: 'Sanity check',
      browser: { width: 800, height: 600 },
    });

    // check window with applitools
    (<any>cy).eyesCheckWindow('Main Page');

    // standard cypress testing
    getGreeting().contains('Welcome to web-myapp!');

    // end applitools test
    (<any>cy).eyesClose();
  });
});
