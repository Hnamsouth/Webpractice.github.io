import mysql from 'mysql2/promise'

/*MySQL2 also exposes a .promise() function on Pools, so you can create a promise/non-promise connections from the same pool*/

const con = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    database: "test"
})

export default con;