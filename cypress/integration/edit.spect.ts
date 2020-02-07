it('edit a Book', () => {
  let numberOfBooks = 0;
  const name = 'Hurz_' + new Date().getMilliseconds();
  // go to BookList
  cy.visit('http://localhost:4200/books');
  cy.get('hannes-preview').then(prev => (numberOfBooks = prev.length));
  //   Find 'New' Link and click
  cy.get('.btn.btn-secondary').click();
  // type data
  cy.get('[type=submit]').should('be.disabled');
  cy.get('input#title').type(name);
  cy.get('input#author').type('Hannes Kannes');
  // save
  cy.get('[type=submit]').should('not.be.disabled');
  cy.get('[type=submit]').click();
  // check
  cy.get('hannes-book-details').contains(name);
});
