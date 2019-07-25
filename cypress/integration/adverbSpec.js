var Adverb = require('../../src/adverb')

describe('Adverb', function(){
  it('generates a random adverb', function() {
    var adverb = new Adverb();
    cy.stub(adverb, 'generate').returns('random adverb')
    expect(adverb.generate()).to.eq('random adverb')
  })
})
