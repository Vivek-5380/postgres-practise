const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres" ,
    host: "localhost" ,
    database: "students" ,
    port: 5432,
    password : ""
});

module.exports = pool;