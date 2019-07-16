describe("Home Page", function(){
  it('shows the landing page', function(){
    cy.visit('/')
    cy
      .get('body')
      .should('be.visible')
      .contains('This is your random chomsky')
  })

  xit('has a button to reload the page', function(){
    cy.visit('/')
    cy
      .get('Give me another random sentence').click()
      .wait()
    cy
      .get('body')
      .should('be.visible')
      .contains('This is your random chomsky')
  })
})
