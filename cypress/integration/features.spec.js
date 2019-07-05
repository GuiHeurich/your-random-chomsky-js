// As a big fan of linguistics
// So that I can look at different sentences every day
// I would like to be able to generate random nouns

describe("Home Page", function(){
  it('shows a random noun', function(){
    cy.visit('/')
    cy
      .get('body')
      .should('be.visible')
      .should('have.text', 'random noun')
  })
})
