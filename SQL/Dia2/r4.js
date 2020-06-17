let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: null,
    database: 'ejerciciodia2'
});
connection.connect(function(error){
    if(error)
        console.log(error)
    else
        console.log('Conexión correcta')
});

//Reto 4   
//Eliminar de la base de datos todas las notas cuya fecha tenga más de 10 años.
let sql = "DELETE FROM marks WHERE date<'2010-06-16'";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
})

//Reto 5
/* El profesor de la asignatura con id = 1 ha decidido aprobar a todos los alumnos que no tenían una media de suficiente, por el gran trabajo realizado en clase. 
Haz una actualización de estos datos en la tabla que corresponda teniendo en cuenta que el profesor solo va a poner un 5 a estos alumnos.*/
let sql = "UPDATE marks SET mark = 5 WHERE mark<5 AND subject_id = 1";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
})
//Reto 6
//Obtener el número total de elementos de una tabla.
/* let sql = "INSERT INTO subjects (subject_id, title) VALUES (null,'HTML'), (null,'Node'), (null,'CSS')";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
}) */
