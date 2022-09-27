/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Dismiss modal by clicking on "AGREE"
       * @example
       * cy.dismissModal()
       */
      dismissModal(): Chainable<any>
    }
    interface Chainable<Subject> {
      /**
       * Helper function to simplify the action of moving a piece
       * @example
       * cy.makeMoves([[6,2], [5,1]])
       */
       makeMoves(): Chainable<any>
    }
  }