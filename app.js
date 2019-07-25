const express = require('express')
const app = express()
const port = 8080

var Noun = require('./src/noun.js')
var Adjective = require('./src/adjective.js')
var Verb = require('./src/verb.js')

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  var random_noun = new Noun();
  var random_adjective = new Adjective();
  var random_verb = new Verb();

  random_noun.generate().then(function(noun){
    var sentence = {}
    sentence["noun"]= noun
    random_adjective.generate().then(function(adjective){
        sentence["adjective"] = adjective
        random_verb.generate().then(function(verb){
          sentence["verb"] = verb
          sentence_string = `${sentence["adjective"]} ${sentence["noun"]} ${sentence["verb"]}s`
          res.render('index', { sentence: sentence_string })
        })
      })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
