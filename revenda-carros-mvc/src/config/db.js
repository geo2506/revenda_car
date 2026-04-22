const mysql = require("mysql2/promisse");
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
     user: process.env.DB_user,
     password: process.env.DB_PASSWORD
     database: process.env.DB_NAME
     waitFORconnecttions: true,
     connectionLIMIT^: 10,
     queueLIMIT: 0
})
})