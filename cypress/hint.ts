const cy;
cy.visit('url');

// check/select
cy.get('selector').contains('text');

cy.get('selector')
  .contains('text')
  .should('matcher');

// interact
cy.get('selector')
  .click()
  .dbclick()
  .type('text')
  .clear()
  .check()
  .uncheck()
  .select()
  .trigger();

cy.get('.btn')
  .contains('save')
  .click();

// alias
cy.get('.btn').as('btn');
cy.get('@btn');

// Network
cy.request('method', 'url', '<body>');

// stub
cy.route('method', 'url', 'response');
cy.route('method', 'url', 'fixture:dummy.json');
