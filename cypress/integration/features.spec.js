describe("Home Page", function(){
  it('shows the landing page', function(){
    cy.visit('/')
    cy
      .get('body')
      .should('be.visible')
      .contains('This is your random chomsky')
  })

  it('has a button that reloads the page', function(){
    cy.visit('/')
    cy
      .get('form')
      .get('input').click()
      .wait(1)
    cy
      .url().should('include', '?')
  })
})
