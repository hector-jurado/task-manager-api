require("dotenv").config();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_host,
    user: process.env.DB_user,
    password: process.env.DB_password,
    database: process.env.DB_database,
});

connection.connect(err =>{
    if(err){
        console.error("error conexion: ", err)
    } else{
        console.log("Conectado a MYSQL")
    }
});

module.exports = connection
