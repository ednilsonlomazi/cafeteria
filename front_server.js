// imports
const exp = require('constants')
const express = require( 'express')
const app = express()
const path = require( 'path')

// Static
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/index', (req, res) => {
    res.render('index')
})

app.get('/receita', (req, res) => {
    res.render('receita')
})

app.get('/catalogo', (req, res) => {
    res.render('catalogo')
})

app.listen(1234)