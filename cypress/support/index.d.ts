/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * Going to the main page and dismiss modal by clicking on "AGREE"
       * @example
       * cy.prepareEnv()
       */
      prepareEnv(): Chainable<any>
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