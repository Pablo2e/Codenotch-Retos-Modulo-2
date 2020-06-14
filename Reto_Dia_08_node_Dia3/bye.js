/* RETOS Reto 1: Crear Servidor Web
Crea un servidor web que realice las siguientes tareas:
1. Debe mostrar por consola ‘Petición recibida del cliente’ por cada conexión que se haga desde el cliente. 
2. Debe mostrar por consola la url y método por el que se está haciendo la petición. 
3. Debe mostrar por consola la cabecera content-type, content-length, user-agent. 
4. Se le retorne al usuario un mensaje del tipo application/json con el status code 200 
y un mensaje coneste contenido: {ok: true, message: ‘Recibido!’ } 
5. Si alguien entra en /bye debe devolver un mensaje del tipo application/json, statusCode: 200
y un mensaje coneste contenido: {ok: true, message: ‘Adios!’ } */


const http = require ('http');

const server = http.createServer(function ( request, response){
    console.log('Petición recibida del cliente')
    console.log('Url: '+ request.url)
    console.log('Metodo: '+ request.method)
    console.log('Petición recibida del cliente')
    response.writeHead(200,{'Content-Type':'application/json',
                             'Content-Length': Buffer.byteLength(body)}),
/*'user-agent':'curl/7.22.0'}).end(body); */
    response.write('{ok: true, message: ‘Recibido!’}')
    response.end()
})
server.listen(3000)