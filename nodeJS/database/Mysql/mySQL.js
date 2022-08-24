// F:\Program\NodeJS\node_modules\npm\node_modules
// $servername = "127.0.0.1:1997";
//     $username = "root";
//     $password = "AFMhn17397!@#";
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "", //AFMhn17397!@#
    database: "test",
    port: '3306'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM students", function(err, result, fields) {
        if (err) throw err;
        //console.log(result);
        console.table(result);
    });
});