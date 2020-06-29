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
//RETO 2
//A) Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.
/* let sql = "SELECT student_id, mark FROM marks WHERE student_id BETWEEN 1 AND 20 OR mark>8 AND (SELECT year(date)='2019')";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
//B) Obtén la media de las notas que se han dado en el último año por asignatura. 
/* let sql = "SELECT subject_id, AVG(mark) AS avgmarks FROM marks GROUP BY subject_id ORDER BY subject_id ASC";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
})  */
//C) Obtén la media aritmética de las notas que se han dado en el último año por alumno. 
/* let sql = "SELECT student_id, AVG(mark) AS avgmarks FROM marks WHERE (SELECT year(date)='2020') GROUP BY student_id ORDER BY student_id ASC";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
})*/ 
//D) Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Jose o algún compañero que elijáis por id.
/* let sql = "SELECT students.first_name, students.last_name, COUNT(subject_teacher.subject_id) FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subject_teacher ON (marks.subject_id = subject_teacher.subject_id) WHERE (subject_teacher.teacher_id=7 OR subject_teacher.teacher_id=6) AND (subject_teacher.subject_id=7 OR subject_teacher.subject_id=5) GROUP BY students.first_name";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
//Reto 3 avanzado 
//Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno que sean HTML o TypeScript y cuyo profesor sea Jose o algún compañero que elijáis por nombre.
let sql = "SELECT students.first_name, students.last_name, COUNT(subject_teacher.subject_id) FROM marks INNER JOIN students ON (marks.student_id = students.student_id) INNER JOIN subject_teacher ON (marks.subject_id = subject_teacher.subject_id) INNER JOIN teachers ON (subject_teacher.teacher_id = teachers.teacher_id) INNER JOIN subjects ON (marks.subject_id = subjects.subject_id) WHERE (teachers.first_name='Jorge' OR teachers.first_name='Marco') AND (subjects.title='Typescript' OR subjects.title='HTML') GROUP BY students.first_name";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) 

/* SELECT student_id, AVG(mark) AS avgmarks FROM marks WHERE (SELECT year(date)='2020') GROUP BY student_id ORDER BY student_id ASC

SELECT students.first_name, subjects.title FROM marks INNER JOIN students ON marks.student_id = students.student_id INNER JOIN subjects ON marks.subject_id = subjects.subject_id

SELECT students.first_name, students.last_name, marks.subject_id, subject_teacher.subject_id 
FROM students 
INNER JOIN marks ON students.student_id = marks.student_id 
INNER JOIN groups ON students.group_id = groups.group_id 
INNER JOIN subject_teacher ON students.group_id = subject_teacher.group_id
WHERE (marks.subject_id=7 OR 5) AND subject_teacher.subject_id=1

SELECT students.first_name, students.last_name, marks.subject_id, subject_teacher.subject_id 
FROM students 
INNER JOIN marks ON students.student_id = marks.student_id 
INNER JOIN groups ON students.group_id = groups.group_id 
INNER JOIN subject_teacher ON students.group_id = subject_teacher.group_id
WHERE (marks.subject_id=7 OR 5) AND subject_teacher.subject_id=1

WHERE marks.subject_id=7 OR 5 AND subject_teacher.subject_id=1

SELECT students.first_name, subjects.subject_id
FROM marks 
INNER JOIN students ON marks.student_id = students.student_id 
INNER JOIN subjects ON marks.subject_id = subjects.subject_id
INNER JOIN subject_teacher ON marks.subject_id = subject_teacher.subject_id
WHERE marks.subject_id=7 AND subject_teacher.teacher_id=1 */