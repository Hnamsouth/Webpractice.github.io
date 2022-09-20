import { connect } from 'mssql'
import mysql from 'mysql2'

const cnnn = mysql.createConnection({
    host: "123.16.16.117", //  123.16.16.117  - api.pokabi.tech -  pokabi.tech
    user: "admin_edit",
    password: "adminedit",
    database: "Eproject",
    // port: 3306,
    // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
})

cnnn.connect((err) => {
    if (err) { console.log(err) } else {
        console.log('connected conDO-AN')
    }
})
cnnn.query('select * from Register')

// cnnn.query('SELECT * FROM `category` WHERE 1', (err, data) => {
//     console.log(data)
// })
export default cnnn;