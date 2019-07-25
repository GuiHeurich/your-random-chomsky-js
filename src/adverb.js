function Adverb(){

}

Adverb.prototype = {
  generate: function (){
    var wordPOS = require('wordpos')
    var word = new wordPOS()
    var promise = word.randAdverb()
    return promise
  }
};

module.exports = Adverb;
