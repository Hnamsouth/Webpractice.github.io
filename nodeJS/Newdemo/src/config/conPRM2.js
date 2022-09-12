import mysql from 'mysql2/promise';

// get the promise implementation, we will use bluebird
// create the connection, specify bluebird as Promise
console.log("connection promise mysql")
const connection = mysql.createPool({ host: '127.0.0.1', user: 'root', database: 'test' });

export default connection;