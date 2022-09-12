// import mysql from 'mysql'

// const conwebhost = mysql.createConnection({
//     host: "localhost",
//     user: "id19353747_hnam17397",
//     password: "AFMhn17397!@#",
//     database: "id19353747_me"
// })
// conwebhost.connect(function(err){
//     if (err) throw err;
//     console.log("Connected!");
// });
// export default conwebhost;


// import mysql from 'mysql2';
// const conwebhost = mysql.createPool({
//     host: 'localhost',
//     user: 'id19353747_hnam17397',
//     password: 'AFMhn17397!@#',
//     database: 'id19353747_me',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });


// var test = async(req, res) => {
//     const [rows, fields] = await conwebhost.promise().query('select * from Custemers');
//     console.log(rows)
// }
// test();