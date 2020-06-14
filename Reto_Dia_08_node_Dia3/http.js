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
    
    response.writeHead(200,{'content-type':'application/json'},)
    if(request.url==="/bye"){
        response.write('{ok: true, message: ‘Adios!’}') 
    }else{
        response.write('{ok: true, message: ‘Recibido!’}')  
    }
    console.log(request.headers['content-type'])// muestra undefined porque el método GET no 
    console.log(request.headers['Content-Length'])//rellena los campos del header Content-type y Content-length
    console.log(request.headers['user-agent'])
    
    response.end()
})
server.listen(3000)