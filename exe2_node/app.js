var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render("index");
});

app.get('/editar', function(req,res){
    res.render("editar");
});

app.listen(3000, function(){
    console.log('A bilola esta de pé, e agora com Nodemon');
});
//comentario que o erick pediu.
//res.end('<html><body><h1>Bem vindo ao Bilola Master</h1></body></html>');
//res.end('<html><body><h1>Bem vindo ao Bilola - Edite sua pagina</h1></body></html>');