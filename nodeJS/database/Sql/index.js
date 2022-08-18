var sql = require('mssql');
// config database
var config = {
    user: 'test1',
    password: '123',
    server: 'SOUTH\\SQLEXPRESS',
    datebase: 'Custemers',
    trustServerCertificate: true,

};
// sql.connect(config).then(pool => {
//     // query
//     return poll.request()
//         .query('select * form Custemers')
// }).then(result => {
//     console.dir(result)
// }).catch(err => {
//     console.log(err)
// })



sql.connect(config, err => {
        if (err) console.log(err);
        // create a new Request object
        let sqlRequest = new sql.Request();
        // query to the database and get the records /fields in the data Object
        let sqlQuery = 'select * from Custemers';
        sqlRequest.query(sqlQuery, (err, data) => {
            if (err) console.log(err);
            // display data
            console.table(data);
            //close the Connection
            sql.close();
        })
    })
    // console.log('hello')