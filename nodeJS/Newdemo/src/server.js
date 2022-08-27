// import thư viện express cú pháp cũ
// express Express :giúp làm  nhanh,  đơn giản hóa  , tối giản cho Node.js
//const express = require('express')
// cú pháp mới
import express from 'express';
import configViewengine from './config/viewEngine';
import 'dotenv/config' // 
import createroute from './route/route'

const app = express()
const port = process.env.PORT;
// cho phep tat ca cac client co the truy cap khi tao api
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
import mysqlPRM from 'mysql2/promise'

// const con = mysqlPRM.createPool({
//     host: "127.0.0.1",
//     user: "root",
//     database: "test"
// });
// async function asd() {
//     const [rows, fields] = await connection.execute('SELECT * from class');
//     console.log(rows)
// }
// asd()

// async function main() {
//     // get the client
//     const mysql = require('mysql2');
//     // create the pool
//     const pool = mysql.createPool({ host: '127.0.0.1', user: 'root', database: 'test' });
//     // now get a Promise wrapped instance of that pool
//     const promisePool = pool.promise();
//     // query database using promises
//     const [rows, fields] = await promisePool.query("SELECT * from class");
//     console.log(rows)
// }
// main();
configViewengine(app);
createroute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})