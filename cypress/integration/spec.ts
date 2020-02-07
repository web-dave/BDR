it('loads books', () => {
  cy.visit('http://localhost:4200');
  cy.contains('Moin');
  cy.get('#books').click();
  cy.get('hannes-preview')
    .contains('978-0-20163-361-0')
    .children('.btn')
    .click();
});
