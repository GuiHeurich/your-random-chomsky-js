var Adjective = require('../../src/adjective')

describe('Adjective', function(){
  it('generates a random adjective', function() {
    var adjective = new Adjective();
    cy.stub(adjective, 'generate').returns('random adjective')
    expect(adjective.generate()).to.eq('random adjective')
  })
})
