// F:\Program\NodeJS\node_modules\npm\node_modules
// $servername = "127.0.0.1:1997";
//     $username = "root";
//     $password = "AFMhn17397!@#";
var mysql = require('mysql')
var con = mysql.createConnection({
    host: '127.0.0.1:1997',
    user: 'root',
    password: 'AFMhn17397!@#'
});
con.connect(err => {
    if (err) throw err;
    console.log("connected !")
})

//C:/Users/admin/AppData/Local/Microsoft/TypeScript/4.7/node_modules/@types/mysql/index