// As a big fan of linguistics
// So that I can look at different sentences every day
// I would like to   be able to generate random adverbs

var Verb = require('../../src/verb')

describe('Verb', function(){
  it('generates a random verb', function() {
    var verb = new Verb();
    cy.stub(verb, 'generate').returns('random verb')
    expect(verb.generate()).to.eq('random verb')
  })
})
