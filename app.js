const express = require('express')
const app = express()
const port = 8080
var Noun = require('./src/noun.js')
var Adjective = require('./src/adjective.js')

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  var random_noun = new Noun();
  var random_adjective = new Adjective();
  random_noun.generate().then(function(noun){
    var sentence = []
    sentence.push(noun)
    random_adjective.generate().then(function(adjective){
        sentence.push(adjective)
        res.render('index', { sentence: sentence })
      })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))
