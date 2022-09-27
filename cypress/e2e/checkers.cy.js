// type definitions for Cypress object "cy"
/// <reference types="cypress" />

// type definitions for custom commands like "createDefaultTodos"
/// <reference types="../support" />

describe('E2E Test', () => {
  beforeEach(() => {
    cy.dismissModal();
  });

  it('Test Scenario', () => {
    // Start a new game by restarting and make sure the page is ready to start playing
    cy.get('a[href="./"]').should('be.visible').click();
    cy.get('[id=message]').should('be.visible')
                          .and('have.text', "Select an orange piece to move.");
    // Make first move
    cy.makeMoves([[6,2], [5,3]]);
    // Make second move so com will take my piece
    cy.makeMoves([[5,3], [6,4]]);
    // Check that player's piece was taken
    cy.get('img[src="you1.gif"]').should('be.visible').then(($elsyou) => {
      const yLength = $elsyou.length; 
      cy.get('img[src="me1.gif"]').should(($elsme) => {
        expect($elsme.length).to.eq(yLength + 1);
      })
    })
    // Start a new game and make sure the page is ready to start playing
    cy.get('a[href="./"]').should('be.visible').click();
    cy.get('[id=message]').should('be.visible')
                          .and('have.text', "Select an orange piece to move.");
  })
})