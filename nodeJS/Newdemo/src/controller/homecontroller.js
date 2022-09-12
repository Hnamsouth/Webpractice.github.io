import pool from '../config/conPRM';
import connection from '../config/conPRM2';
import condb4 from '../config/connDB';
import coninfinity from '../config/conINFINITY';

var homepage = (req, res) => {
    return res.render('demohtml.ejs')
}

var conn1 = async(req, res, test) => {
    const [rows, fields] = await pool.promise().query('select * from students');
    console.log(rows)
        // check editUser id
    let editUserId = req.query.id
        //check post users
    let PostErr = req.query.postERR === undefined ? false : true;
    // get editERR parameters 
    let editERR = req.query.editERR
        // let postERR = req.query.postERR
    let dataEdit = {};
    let StatusEdit = false;
    // check editUser
    if (editUserId || editERR !== undefined) {
        // set data edit user
        let [DataEdit, fields2] = await pool.promise().query("select * from students where id= ?", [editERR === undefined ? editUserId : editERR]);
        dataEdit = DataEdit;
        StatusEdit = true;

        PostErr = editERR !== undefined ? true : PostErr;
    }
    return res.render('testparam.ejs', { data2: rows, data: JSON.stringify(rows), dtEdit: dataEdit, stas: StatusEdit, SMerr: PostErr })

}
var conn2 = (req, res) => {
    // get parameters on url
    const id = req.query.idrc; //=> http://localhost:1234/tparam2?idrc=1
    let qr = `select * from id`;
    condb4.query(qr, (err, data) => {
        if (err) res.send(err);
        return res.send(data)
    })
}
var conn3 = async(req, res) => {
    const [rows, fields] = await connection.execute('select * from class');
    return res.send(rows)
}
var connPostSTD = async(req, res) => {
    // get user input
    let { name, age, classid, optionClassId } = req.body;
    // check user input
    console.log(req.body)
    if (!name || !age || !classid) {
        let messerr = "miss params"
        return res.redirect('/conn1?postERR=1') ///conn1?smErr=1
    }
    let check = await pool.promise().query('insert into `students`(STN_Name,Age,ClassID) values(?,?,?)', [name, age, classid])
    return res.redirect("/conn1")

}
var connEditSTD = async(req, res) => {
    // get user input from FORM ejs
    let { id, name, age, classid } = req.body
        // check user input
    if (!name || !age || !classid) {
        return res.redirect(`/conn1?editERR=${id}`) ///conn1?smErr=1
    }
    await pool.promise().query('update students set STN_Name=?,Age=?,ClassID=? where id=?', [name, age, classid, id])
    return res.redirect("/conn1")
}
var deleteUser = async(req, res) => {
    // get user id  params on url  users/1   user/2
    let id = req.params.id
    await pool.promise().query("delete from students where id = ?", [id])
    return res.redirect("/conn1")
}
var selectdata = async(req, res) => {
    const [rows, fields] = await pool.promise().query("select * from students");
    console.log(rows)
    return res.send({ data: rows })
}



module.exports = {
    homepage,
    conn1,
    conn2,
    conn3,
    connPostSTD,
    deleteUser,
    connEditSTD,
    selectdata
}