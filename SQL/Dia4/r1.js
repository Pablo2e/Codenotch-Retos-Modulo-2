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
//RETO 1 Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas en las que están apuntados.
/* let sql = "SELECT students.first_name, students.last_name, subjects.title FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) GROUP BY students.student_id";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */  
//RETO 2 Obtén todos los nombres y apellidos de los profesores y los nombres de las asignaturas que imparten.. 
/* let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title FROM teachers LEFT JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) LEFT JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) GROUP BY teachers.teacher_id";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
//RETO 3 Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y apellidos del profesor que la imparte.  
/* let sql = "SELECT subjects.title, teachers.first_name, teachers.last_name, COUNT(DISTINCT(marks.student_id)) FROM subjects LEFT JOIN marks ON (subjects.subject_id = marks.subject_id) LEFT JOIN subject_teacher ON (subject_teacher.subject_id = subjects.subject_id) LEFT JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) GROUP BY subjects.title";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
})  */
//RETO 4 Obtén el nombre y apellido de todos los profesores, la asignatura que imparten y la nota media de la asignatura que imparten. 
/* let sql = "SELECT teachers.first_name, teachers.last_name, subjects.title, AVG(marks.mark) FROM teachers LEFT JOIN subject_teacher ON (teachers.teacher_id = subject_teacher.teacher_id) LEFT JOIN subjects ON (subject_teacher.subject_id = subjects.subject_id) LEFT JOIN marks ON (subjects.subject_id = marks.subject_id) GROUP BY subjects.title";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
//RETO 5 listar el nombre y apellidos del alumno, el número de asignaturas que ha cursado, la nota media de todas ellas, la nota más alta y la nota más baja conseguida.
let sql = "SELECT students.first_name, students.last_name, COUNT(subjects.title), AVG(marks.mark), MAX(marks.mark), MIN(marks.mark) FROM students LEFT JOIN marks ON (students.student_id = marks.student_id) LEFT JOIN subjects ON (marks.subject_id = subjects.subject_id) GROUP BY students.last_name";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) 

