describe('ng-refs-demo', () => {
  describe('ConsoleRef', () => {
    let consoleLogStub: sinon.SinonStub;
    let logs = [];

    beforeEach(() => cy.visit('/', {
      onBeforeLoad(window) {
        // Because Cypress and other processes will log
        // to the console, we will keep track of all the
        // logs that our stub receives.
        logs = [];
        const fakeLogger = log => logs.push(log);
        consoleLogStub = cy.stub(window.console, 'log')
          .as('consoleLog')
          .callsFake(fakeLogger);
      }
    }));

    it('should log to the console', () => {
      cy.get('#consoleRefLog')
        .click()
        .then(() => {
          const message: string = logs
            .filter(log => typeof log === 'string')
            .find(log => log.startsWith('The time is:'));
          return expect(message).to.not.be.undefined;
        });
    });
  });
  describe('WindowRef', () => {
    let windowAlertStub: Cypress.Agent<sinon.SinonStub>;

    beforeEach(() => cy.visit('/', {
      onBeforeLoad(window) {
        windowAlertStub = cy.stub(window, 'alert').as('windowAlert');
      }
    }));

    it('should open a window alert', () => {
      cy.get('#windowRefAlert')
        .click()
        .then(() => expect(windowAlertStub).to.be.calledWith('hello world'));
    });
  });
});
