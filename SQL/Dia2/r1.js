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

//Reto 1
//Inserto un teacher
let sql = "INSERT INTO teachers (first_name, last_name) VALUES ('Jorge', 'Rodriguez Saiz')";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
})
//Inserto el resto de los Students
let sql = "INSERT INTO students (student_id, first_name, last_name, group_id) VALUES (null,'Pablo', 'Cañellas', 1), (null,'Jiaen', 'Pan', 1), (null,'Manuel', 'Estrada', 1), (null,'Maria', 'Aguilar', 1), (null,'Alex', 'Manzanares', 1), (null,'Cesar', 'Antonio', 1), (null,'Joan', 'Casals', 1), (null,'Cristina', 'Medina', 1)";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
}) 
//Inserto subjects
let sql = "INSERT INTO subjects (subject_id, title) VALUES (null,'Typescript'), (null,'SQL')";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
})
//Inserto marks
let sql = "INSERT INTO marks (mark_id, student_id, subject_id, date, mark) VALUES (null, 13, 5, '2020-06-17', 10), (null, 16, 1, '2020-06-17', 8), (null, 18, 6, '2020-06-17', 9), (null, 20, 6, '2020-06-17', 10)";
 connection.query(sql, function(err, result){
     if (err){
         console.log(err)
     }else{
         console.log('Dato insertado')
         console.log(result)
     }
 })
//Inserto groups
let sql = "INSERT INTO groups (group_id, name) VALUES (null, 'codenotch_verano_2020'), (null, 'codenotch_otoño_2020'), (null, 'codenotch_invierno_2020')";
 connection.query(sql, function(err, result){
     if (err){
         console.log(err)
     }else{
         console.log('Dato insertado')
         console.log(result)
     }
 })
//Inserto subject_teachers
let sql = "INSERT INTO subject_teacher (subject_id, teacher_id, group_id) VALUES (5, 1, 5), (6, 1, 3), (1, 6, 3)";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato insertado')
        console.log(result)
    }
})