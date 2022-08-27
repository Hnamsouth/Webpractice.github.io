import pool from '../config/conPRM';
import connection from '../config/conPRM2';
import condb4 from '../config/connDB';

var homepage = (req, res) => {
    return res.render('demohtml.ejs')
}

var testparam = async(req, res) => {
    const [rows, fields] = await pool.promise().query('select * from students');
    return res.render('testparam.ejs', { data2: rows })
}
var testparam2 = (req, res) => {
    const id = req.query.idrc; //=> http://localhost:1234/tparam2?idrc=1
    let qr = `select * from id`;
    condb4.query(qr, (err, data) => {
        if (err) res.send(err);
        return res.send(data)
    })
}
var testparam3 = async(req, res) => {
    const [rows, fields] = await connection.execute('select * from class');
    return res.send(rows)
}

module.exports = {
    homepage,
    testparam,
    testparam2,
    testparam3
}