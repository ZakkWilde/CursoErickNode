var http = require('http');

var server = http.createServer(function(request, response){
    // console.log('Passou por aqui');
    // response.end('Vai bilola!!!');
    if(request.url == '/editar'){
        response.end('<html><body><h1>Bem vindo ao Bilola - Edite sua pagina</h1></body></html>');
    }
    else{
        response.end('<html><body><h1>Bem vindo ao Bilola Master</h1></body></html>');
    }
    
});
server.listen(3000);
console.log('Servidor no ar');
