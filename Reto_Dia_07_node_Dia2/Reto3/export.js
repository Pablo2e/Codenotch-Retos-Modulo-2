const greeting ={};
function saludo(nombre){
    return(`Hola ${nombre}, espero tengas un buen día`)
}
greeting.saludo = saludo
module.exports = greeting;