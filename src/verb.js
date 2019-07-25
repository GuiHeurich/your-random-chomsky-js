function Verb(){

}

Verb.prototype = {
  generate: function (){
    var wordPOS = require('wordpos')
    var word = new wordPOS()
    var promise = word.randVerb()
    return promise
  }
};

module.exports = Verb;
