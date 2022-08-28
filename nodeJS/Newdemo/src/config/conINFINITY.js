import mysql from 'mysql2/promise'

const coninfinity = mysql.createPool({
    host: "sql105.epizy.com",
    user: "epiz_32471822",
    password: "AFMhn17397",
    database: "epiz_32471822_hsouth"
})
export default coninfinity;