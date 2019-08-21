/* Importando configurações do servidor */

var app = require('./config/server')

/* Parametrizando a porta de escuta */

app.listen(9000, function(){
    console.log("Servidor Online")
})