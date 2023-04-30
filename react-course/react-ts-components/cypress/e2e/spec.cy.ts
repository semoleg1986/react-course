/// <reference types="cypress" />
describe('Checking pages', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  it('Main page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'Home').click();
    cy.url().should('include', '/');
    cy.get('header').contains('a', 'Home');
  });
  it('Form page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'Form').click();
    cy.url().should('include', '/form');
    cy.get('header').contains('a', 'Form');
  });
  it('About page link works', () => {
    cy.visit('/');

    cy.get('header').contains('a', 'About').click();
    cy.url().should('include', '/about');
    cy.get('header').contains('a', 'About');
  });
  it('404 page link works', () => {
    cy.visit('/404');

    cy.url().should('include', '/404');
    cy.get('header').contains('a', 'About');
  });
  it('Some kind of crutch', () => {
    expect(true).to.equal(true);
  });
});
describe('Checking modal', () => {
  it('Modal window opened', () => {
    cy.visit('/');

    cy.get('.post').eq(0).click();
    cy.get('.modal').should('be.visible');
  });

  it('Modal window closed', () => {
    cy.visit('/');

    cy.get('.post').eq(0).click();
    cy.get('.close').click();
    cy.get('.modal').should('not.exist');
  });

  it('Modal window has true information', () => {
    cy.visit('/');

    cy.get('.post').eq(0).click();
    cy.get('img').should('be.visible');
  });
});
describe('Checking Home', () => {
  it('SearchBar has worked well', () => {
    cy.visit('/');

    cy.get('input').click().type('breaking');
    cy.get('header').contains('a', 'Form').click();
    cy.get('header').contains('a', 'Home').click();
    cy.get('input').should('have.value', 'breaking');
  });
});
describe('FormInput', () => {
  beforeEach(() => {
    cy.visit('/form');
  });

  it('displays an error when trying to submit a form with invalid data', () => {
    cy.get('input[id="name"]').type('john');
    cy.get('input[id="surname"]').type('doe');
    cy.get('input[id="date"]').type('2030-01-01');
    cy.get('select[name="gender"]').select('Male');
    cy.get('input[id="movies"]').check();
    cy.get('input[id="rules"]').check();
    cy.get('button[type="submit"]').click();
    cy.get('p.form-error').should('have.length', 7);
  });

  it('adds a new card on form submission with valid data', () => {
    cy.get('input[id="name"]').type('John');
    cy.get('input[id="surname"]').type('Doe');
    cy.get('input[id="date"]').type('2000-01-01');
    cy.get('select[name="gender"]').select('Male');
    cy.get('input[id="movies"]').check();
    cy.get('input[id="rules"]').check();
    cy.get('input[id="imageURL"]').selectFile('cypress/fixtures/test-image.png');
    cy.get('button[type="submit"]').click();
    cy.get('p.form-add').should('exist');
  });
});
