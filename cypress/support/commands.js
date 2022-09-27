// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('dismissModal', () => {
    // Tried to dismiss modal by setting the right cookie (apparently "euconsent-v2"), but I could not make it work
    // cy.setCookie('euconsent-v2', 'CPf6TMAPf6TMAAKAsAENCiCsAP_AAH_AACiQJAABIAZkQABBICACAAAAAAAAAAAAQIAAAABAAAAAFCAAAAAAAAAAAEAAEAgAAAAAAAAAIAAAAAAAAEAAAgAABgAAAAAQAAAAAAAAAAAAAAAAAAAAAAogAAAAACAQAAAAgAAAAAAAEAAAAAAAAAQAACAe_vCfV5_9jfn9fR_789KP9_58v-_8_____3____3_79wSAAAAASIgACIAEEAAAAAAAAAAAAAgQAAAAAAAAAAKAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAIBAAAAAAAAAAAAAABRAAAAAAAAAAAABAAAAAAAAIAAAAAAAQAAAAEAKDRGxUACJJARSAAJCwcAwRICViwQNMUb5ACMEKAUSoVgAA.diAACdgAAAAA');
    // Dismiss modal by clicking on "AGREE"
    cy.visit('/');
    if(cy.get('div[id="qc-cmp2-ui"]', {timeout:10000})) {
      cy.get('button[mode="primary"]').should('be.visible').then(($el) => { $el.click() });
    }
})

Cypress.Commands.add('makeMoves', (moves) => {
    // This function deals with moving a piece
    // params must be like [[start_row, start_col], [move1_row, move1_col], ..., [moven_row, moven_col]]
    moves.forEach(function(coords) {
        cy.get(`img[name="space${coords[0]}${coords[1]}"]`).should('not.be.disabled').then(($el) => { $el.click() });
    });
    // Allow some time for comp to move (tried other "more robust" ways but couldn't find an elegant solution)
    cy.wait(3000);
})
