describe('ng-refs-demo', () => {
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
