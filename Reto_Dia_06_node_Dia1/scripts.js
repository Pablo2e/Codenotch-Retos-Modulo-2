/* RETOS
Reto 1 Escribir tres funciones:
1. Una función a que tan solo escriba ‘hola desde a’ por la consola.
2. Una función b que escriba por consola ‘hola desde b’.
3. Una función main que reciba como parámetro una función. Que pinte por consola ‘hola desde main’ y luego llame a la función que recibe como parámetro.
4. Llamar a main(a) ¿qué pone en pantalla? ¿qué pasa si cambiamos a main(b)? ¿que pasa si llamamos a main(main)? */
function a(){
    console.log("Hola desde a")
}

function b(){
    console.log("Hola desde b")
}

function main(f){
    console.log("Hola desde main");
    f();
}

a()
b()
main(a)
main(b)
//main(main)

/* Reto 2
1. En primer lugar escribe una función que retorne el cuadrado de un número.
2. A continuación una función que reciba como parámetro un número y que retorne un número aleatorio entre el 0 y ese número.
3. Por último hacer una función llamada compose que reciba dos funciones (a y b) como parámetros.
4. Debe devolver otra función que recibirá un parámetro x. Esta función retornará la llamada a la función a que recibirá como parámetro la función b con el argumento x.
5. Invocar a la función compose para que de como resultado una función que devuelva un número que será el cuadrado de un valor entre 0 y el parámetro x. */

cuadrado=(n)=>{
    return (n*n)
}

aleatorio=(n)=>{
    return (n=Math.floor(Math.random()*n))
}

compose=(a, b)=>{
    return function (x){
        return a(b(x))
    }
}

console.log(cuadrado(5))
console.log(aleatorio(10))
console.log(compose(cuadrado,aleatorio)(9))
