/* RETOS
Reto 1: Eventloop
1. Muestra en pantalla el mensaje ‘after1 second’ una vez haya pasado 1 segundo.
2. Tomando como base el código del punto anterior haz que, una vez pasado dicho segundo, se muestre en pantalla ‘last process after finish the loop’ al final del event loop actual.
3. Tomando como base código anterior haz que se muestre un mensaje de ‘initial loop event’ en el siguiente loop. */
setTimeout(function () { 
    console.log('after 1 second')
    setImmediate(function () { 
        console.log('last process after finish the loop')
        process.nextTick(function () { 
            console.log('initial loop event');
        });
    });
},1000);

/* Reto 2: Event Loop Timers
1. Haz que se muestre un mensaje cada 5 segundos.
2. Guarda en una variable el tiempo actual (Date.now()) y cada vez que se muestre el mensaje muestra 
la diferencia entre la fecha actual y el tiempo que guardaste en la variable anterior.
3. Actualiza lavariable con el nuevo tiempo.
Después de varios intentos, ¿sale siempre la misma diferencia? ¿por qué no? */

var tiempoActual = Date.now()
var resta = 0
setInterval(function () {
    console.log('after 5 second')
    resta= Date.now()
    console.log(resta-tiempoActual)
    tiempoActual = Date.now()
},5000);




