var express = require('express')
var router = express.Router()


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/receita', (req, res) => {
    res.render('receita')
})

router.get('/catalogo', (req, res) => {
    res.render('catalogo')
})

module.exports = router