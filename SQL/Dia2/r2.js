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

//Reto 2
//Setear todas las notas de los alumnos a 0
/* let sql = "UPDATE marks SET MARK=0";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
}) */
//Obtener el nombre y el primer apellido de todos los estudiantes
let sql = "SELECT first_name, last_name FROM students";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Datos obtenidos')
        console.log(result)
    }
}) 
//Obtener todos los datos de los profesores.
/* let sql = "SELECT * FROM teachers";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato obtenido')
        console.log(result)
    }
}) */
