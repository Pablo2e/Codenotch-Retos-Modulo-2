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
/* let sql = "DELETE FROM marks WHERE date<'2010-06-16'";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
}) */

//Reto 5
/* El profesor de la asignatura con id = 1 ha decidido aprobar a todos los alumnos que no tenían una media de suficiente, por el gran trabajo realizado en clase. 
Haz una actualización de estos datos en la tabla que corresponda teniendo en cuenta que el profesor solo va a poner un 5 a estos alumnos.*/
/* let sql = "INSERT INTO students (student_id, first_name, last_name, group_id) VALUES (null,'Pablo', 'Cañellas', 1), (null,'Jiaen', 'Pan', 1), (null,'Manuel', 'Estrada', 1), (null,'Maria', 'Aguilar', 1), (null,'Alex', 'Manzanares', 1), (null,'Cesar', 'Antonio', 1), (null,'Joan', 'Casals', 1), (null,'Cristina', 'Medina', 1)";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
})  */
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
//Inserto marks (2 en phpMyAdmin, otras 2 aqui)
/* let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES (null, 14, 9, '1992-10-21', 10), (null, 19, 13, '1998-01-15', 8)";
 connection.query(sql, function(err, result){
     if (err){
         console.log(err)
     }else{
         console.log('Dato insertado')
         console.log(result)
     }
 }) */
//Inserto groups (3 en phpMyAdmin, otras 3 aqui)
/* let sql = "INSERT INTO groups (group_id, name) VALUES (null, 'codenotch_verano_1998'), (null, 'codenotch_otoño_2015'), (null, 'codenotch_invierno_1990')";
 connection.query(sql, function(err, result){
     if (err){
         console.log(err)
     }else{
         console.log('Dato insertado')
         console.log(result)
     }
 }) */
//Inserto subject_teachers (3 en phpMyAdmin, otras 3 aqui)
/* let sql = "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES (13, 13, 11), (9, 6, 7), (7, 14, 5)";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
}) */