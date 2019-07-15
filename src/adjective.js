function Adjective(){
}

Adjective.prototype = {
  generate: function(){
    var wordPOS = require('wordpos')
    var word = new wordPOS()
    var promise = word.randAdjective()
    return promise
  }
};

module.exports = Adjective;
