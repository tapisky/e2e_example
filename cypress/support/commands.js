Cypress.Commands.add('prepareEnv', () => {
    // Dismiss modal by setting cookies and localStorage
    cy.setCookie(
        'euconsent-v2',
        'CPf9mIAPf9mIAAKAsAENCiCsAP_AAH_AACiQJAABIAZkQABBICACAAAAAAAAAAAAQIAAAABAAAAAFCAAAAAAAAAAAEAAEAgAAAAAAAAAIAAAAAAAAEAAAgAABgAAAAAQAAAAAAAAAAAAAAAAAAAAAAogAAAAACAQAAAAgAAAAAAAEAAAAAAAAAQAACAe_vCfV5_9jfn9fR_789KP9_58v-_8_____3____3_79wSAAAAASIgACIAEEAAAAAAAAAAAAAgQAAAAAAAAAAKAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAIBAAAAAAAAAAAAAABRAAAAAAAAAAAABAAAAAAAAIAAAAAAAQAAAAEAKDRGxUACJJARSAAJCwcAwRICViwQNMUb5ACMEKAUSoVgAA.diAACdgAAAAA',
        { domain: '.www.gamesforthebrain.com', secure: true, sameSite: 'lax' });
    window.localStorage.setItem(
        '_cmpRepromptHash',
        'CPf9mIAPf9mIAAKAsAENCiCsAP_AAH_AACiQJAABIAZkQABBICACAAAAAAAAAAAAQIAAAABAAAAAFCAAAAAAAAAAAEAAEAgAAAAAAAAAIAAAAAAAAEAAAgAABgAAAAAQAAAAAAAAAAAAAAAAAAAAAAogAAAAACAQAAAAgAAAAAAAEAAAAAAAAAQAACAe_vCfV5_9jfn9fR_789KP9_58v-_8_____3____3_79wSAAAAASIgACIAEEAAAAAAAAAAAAAgQAAAAAAAAAAKAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAIBAAAAAAAAAAAAAABRAAAAAAAAAAAABAAAAAAAAIAAAAAAAQAAAAEAKDRGxUACJJARSAAJCwcAwRICViwQNMUb5ACMEKAUSoVgAA.diAACdgAAAAA.1.wejOlDtDzn0yPjFFG10tVg==');
    // Visit page
    cy.visit('/');
})

Cypress.Commands.add('makeMoves', (moves) => {
    // This function deals with moving a piece
    // params must be like [[start_row, start_col], [move1_row, move1_col], ..., [moven_row, moven_col]]
    moves.forEach(function(coords) {
        cy.get(`img[name="space${coords[0]}${coords[1]}"]`).should('not.be.disabled').then(($el) => { $el.click() });
    });
    // Allow some time after moving for comp calculations (tried other "more robust" ways but did not work properly)
    // This might fail if com takes more than 3s to calculate and perform moves
    cy.wait(3000);
})
