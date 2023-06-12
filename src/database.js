const mysql = require('mysql2');
const {promisify} = require('util');
const {database} = require('./keys');


const pool=mysql.createPool(database);

pool.getConnection((err,connection)=>{
    if(connection)
    {
        console.log('DB is connect');
    }

    if(err)
    {
        console.log('DB is not connect');

    }
})

pool.query=promisify(pool.query);

module.exports =pool;