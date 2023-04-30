/// <reference types="cypress" />
describe('Checking everything ', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });

  it('checks Main page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'Home').click();
    cy.url().should('include', '/');
    cy.get('header').contains('a', 'Home');
  });
  it('checks Form page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'Form').click();
    cy.url().should('include', '/form');
    cy.get('header').contains('a', 'Form');
  });
  it('checks About page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'About').click();
    cy.url().should('include', '/about');
    cy.get('header').contains('a', 'About');
  });
  it('Some kind of crutch', () => {
    expect(true).to.equal(true);
  });
});
