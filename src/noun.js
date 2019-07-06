function Noun(){

}

Noun.prototype = {
  generate: function (){
    var wordPOS = require('wordpos')
    var word = new wordPOS()
    var promise = word.randNoun()
    return promise
  }
};

module.exports = Noun;
