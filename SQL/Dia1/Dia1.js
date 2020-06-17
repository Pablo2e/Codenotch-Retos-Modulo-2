let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: null,
    database: 'codenotch'
});
connection.connect(function(error){
    if(error)
        console.log(error)
    else
        console.log('Conexión correcta')
});


//creo la tabla Directivos
/* let sql1 = 'CREATE TABLE Directivos(directivo_dni VARCHAR(9) PRIMARY KEY, nombre VARCHAR(50), fecha_nacimiento VARCHAR(50), telefono INT(9), dirección VARCHAR(50), email VARCHAR(50))';
connection.query(sql1, function (err, result){
    if(err) throw err
    else{
        console.log('Tabla creada')
        console.log(result)
    }
})
//creo la tabla Alumnos
let sql2 = 'CREATE TABLE Alumnos(alumno_dni VARCHAR(9) PRIMARY KEY, nombre VARCHAR(50), fecha_nacimiento VARCHAR(50), telefono INT(9), dirección VARCHAR(50), email VARCHAR(50), materias_cursadas TEXT, ejercicios_hechos INT)';
connection.query(sql2, function (err, result){
    if(err) throw err
    else{
        console.log('Tabla creada')
        console.log(result)
    }
}) */
//creo la tabla Asignaturas
/* let sql3 = 'CREATE TABLE Asignaturas(asignatura_id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(50), horas INT, material VARCHAR(50), evaluación INT, recursos VARCHAR(50))';
connection.query(sql3, function (err, result){
    if(err)
        console.log(err)
    else{
        console.log('Tabla creada')
        console.log(result)
    }
})  */
//creo la tabla Bootcamp
/* let sql = 'CREATE TABLE bootcamp(bootcamp_id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(50),directivo_dni VARCHAR(9), profesor_dni VARCHAR(9), alumno_dni VARCHAR(9), asignatura_id INT,'+
'FOREIGN KEY(directivo_dni) REFERENCES directivos(directivo_dni), FOREIGN KEY(profesor_dni) REFERENCES profesores(profesor_dni), FOREIGN KEY(alumno_dni) REFERENCES alumnos(alumno_dni),'+
'FOREIGN KEY(asignatura_id) REFERENCES asignaturas(asignatura_id))';
connection.query(sql, function (err, result){
    if(err) throw err
    else{
        console.log('Tabla creada')
        console.log(result)
    }
}) */
/* //Agrego un campo a la tabla ASIGNATURAS
let sql = 'ALTER TABLE Asignaturas ADD comentarios TEXT';
connection.query(sql, function (err, result){
    if(err)
        console.log(err)
    else{
        console.log('Tabla creada')
        console.log(result)
    }
}) */
//Borro la tabla Alumnos //no la puedo borrar porque tiene FOREIGN KEYS y habría que borrar las otras tambien
let sql = ' DROP TABLE Alumnos';
connection.query(sql, function (err, result){
    if(err)
        console.log(err)
    else{
        console.log('Tabla creada')
        console.log(result)
    }
})