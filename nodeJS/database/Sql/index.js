// var sql = require('mssql');
// // config database
// var config = {
//     user: 'hsouth',
//     password: 'AFMhn17397',
//     server: 'localhost',
//     datebase: 'Custemers',
//     synchronize: true,
//     //         trustServerCertificate: true,

// };
// sql.connect(config).then(pool => {
//     // query
//     return poll.request()
//         .query('select * form Custemers')
// }).then(result => {
//     console.dir(result)
// }).catch(err => {
//     console.log(err)
// })



// sql.connect(config, err => {
//         if (err) console.log(err);
//         // create a new Request object
//         let sqlRequest = new sql.Request();
//         // query to the database and get the records /fields in the data Object
//         let sqlQuery = 'select * from Custemers';
//         sqlRequest.query(sqlQuery, (err, data) => {
//             if (err) console.log(err);
//             // display data
//             console.table(data);
//             //close the Connection
//             sql.close();
//         })
//     })
// console.log('hello')

var express = require('express')
var app = express();
app.get('/', (req, res) => {
    var sql = require('mssql');

    // config database
    var config = {
        user: 'hsouth',
        password: 'AFMhn17397',
        server: 'localhost',
        database: 'Custemers',
        // Custemers
        synchronize: true,
        trustServerCertificate: true,
    };

    sql.connect(config, err => {
        if (err) console.log(err);
        // create a new Request object
        let sqlRequest = new sql.Request();
        // query to the database and get the records /fields in the data Object
        let sqlQuery = 'select * from Numbers';
        sqlRequest.query(sqlQuery, (err, data) => {
            if (err) console.log(err);
            // display data
            console.table(data.recordset);
            console.groupCollapsed
                //console.log(data);
                //close the Connection
            sql.close();
        })
    })

    /*
    // // connect to database
    // sql.connect(config, err => {
    //     if (err) console.log(err);
    //     //create request object
    //     var request = new sql.Request();

    //     // query to database and get the records
    //     request.query('select * form Custemers', (err, recordset) => {
    //         if (err) console.log(err);
    //         console.log(recordset)
    //     })
    // })

    // sql.connect(config).then(pool => {
    //     // query
    //     return poll.request()
    //         .query('select * form Custemers')
    // }).then(result => {
    //     console.dir(result)
    // }).catch(err => {
    //     console.log(err)
    // })
*/



})
var server = app.listen(5000, () => {
    console.log('server running..');
})