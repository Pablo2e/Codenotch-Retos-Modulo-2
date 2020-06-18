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
//RETO 1 Usando  el  ejemplo  de  base  de  datos  que  tenemos  ya  implementado  desde  unidades anteriores
//A)  Calcular  la  nota media de los  alumnos  de la asignatura 1.
/* let sql = "SELECT AVG(mark) FROM marks WHERE subject_id=1";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
})   */
//B) Calcular  el número  total  de alumnos  que hay en el bootcamp. 
/* let sql = "SELECT COUNT(*) FROM students";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
})  */
//C) Listar  todos  los  campos  de la tabla  “groups”.  
/* let sql = "SELECT * FROM groups";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
})  */
//D) Elimina  todas  las  notas  de  la  base  de  datos  que  estén  por  encima  de  5  y  que  sean  del  año pasado  (no  utilices BETWEEN). 
/* let sql = "DELETE FROM marks WHERE mark>5 AND (SELECT year(date)='2019')";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
//E) Obtén  los  datos  de  todos  los estudiantes  que  estén  en  el  bootcamp este  año. Para ello la tabla de estudiantes debe tener un campo que sea el año de ingreso.
/* let sql = "SELECT * From students WHERE año_ingreso=2020";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) */ 
//F) Calcular  el numero  de profesores que hay por  cada asignatura.
let sql = "SELECT subject_id, COUNT(subject_id) AS teacherXsubject FROM subject_teacher GROUP BY subject_id ORDER BY subject_id ASC";
connection.query(sql, function(err, result){
    if (err){
        console.log(err)
    }else{
        console.log('Dato a mostrar')
        console.log(result)
    }
}) 
