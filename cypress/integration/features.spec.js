// As a big fan of linguistics
// So that I can look at different sentences every day
// I would like to be able to generate random nouns

describe("Home Page", function(){
  it('shows the landing page', function(){
    cy.visit('/')
    cy
      .get('body')
      .should('be.visible')
      .contains('This is your random chomsky')
  })
})
