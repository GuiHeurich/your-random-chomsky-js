const express = require('express')
const app = express()
const port = 3000
var Noun = require('./src/noun.js')
var random_noun = new Noun();

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', (req, res) => res.render('index', { sentence: random_noun.generate()}))

app.listen(port, () => console.log(`Example app listening on port ${port}`))
