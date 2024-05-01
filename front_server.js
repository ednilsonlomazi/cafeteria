// imports
const express = require( 'express')
const app = express()

// Static
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs') 

var routes = require('./routes/main_routes');
app.use('/', routes)

app.listen(1234)