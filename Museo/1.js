let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: null,
    database: 'museo'
});
connection.connect(function(error){
    if(error)
        console.log(error)
    else
        console.log('Conexión correcta')
});
/* 1  Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro de la exposición, 
la fecha de expiración de este, la información básica (nombre, apellidos y email) de la persona que los ha prestado. */
/* let sql = "SELECT students.first_name, students.last_name, subjects.title FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) GROUP BY students.student_id";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */  
/* 2 Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados por su situación dentro de 
la organización, esto es, cuántos hay expuestos, cuántos en itineranciay cuántos almacenados. Además, se pide saber el 
número total de los objetos que están en préstamo y cuáles no para todas y cada una de las categorías anteriormente seleccionadas. */

/* let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers LEFT JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) LEFT JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY teachers.teacher_id";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
