/* Importando Modulo do framework Express */

var express = require('express')

/* Importando Modulo Consign */

var consign = require('consign')

/* Importando Modulo Body-Parser */

var bodyParser = require('body-parser')

/* Importando Modulo Express-Validator */

var expressValidator = require('express-validator')

/* Iniciar Express */

var app = express()

/* Vars View - Engine/Express */

app.set('view engine', 'ejs')
app.set('views', '../app/views')

/* Middleware Express Static */

app.use(express.static('../app/public'))

/* Middleware Body-Parser */

app.use(bodyParser.urlencoded({extended: true}))

/* Middleware  Express Validator */

app.use(expressValidator())

/* Autoload */

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/* Export Modulos */

module.exports = app