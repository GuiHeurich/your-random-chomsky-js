const express = require('express')
const app = express()
const port = 8080
var Noun = require('./src/noun.js')

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function (req, res) {
  var random_noun = new Noun();
  random_noun.generate().then(function(results){
    res.render('index', { sentence: results })
  })
})
app.get('/random', (req, res) => res.render('random', { sentence: "hello" }))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
