var Noun = require('../../src/noun')

describe('Noun', function(){
  it('generates a random noun', function(){
    var noun = new Noun();
    expect(noun.generate()).to.eq('random noun')
  })
});
