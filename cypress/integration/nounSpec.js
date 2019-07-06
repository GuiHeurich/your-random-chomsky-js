var Noun = require('../../src/noun')

describe('Noun', function(){
  it('generates a random noun', function(){
    var noun = new Noun();
    cy.stub(noun, 'generate').returns('random noun')
    expect(noun.generate()).to.eq('random noun')
  })

  xit('returns a promise', function(){
    var noun = new Noun();
    expect(noun.generate()).to.respondTo('then')
  })
});
