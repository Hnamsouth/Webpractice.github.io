import pool from '../config/conPRM';
import connection from '../config/conPRM2';
import condb4 from '../config/connDB';

var getAPI = async(req, res) => {
        let id = req.query.id;

        if (id === undefined) {
            let [rows, fields] = await pool.promise().query('select * from students');
            res.status(200).json({ mess: "get user complete", data: rows })
        } else {
            let [rows, fields] = await pool.promise().query('select * from students where id = ?', [id]);
            res.status(200).json({ mess: "get user complete", data: rows })
        }

    }
    // 
var postAPI = async(req, res) => {
        let { STN_Name, Age, ClassID } = req.body;
        console.log(req.body)
        if (!STN_Name || !Age || !ClassID) {
            res.status(200).json({ mess: "Miss required params" })
        }
        let check = await pool.promise().query('insert into `students`(STN_Name,Age,ClassID) values(?,?,?)', [STN_Name, Age, ClassID])
        res.status(200).json({ mess: "create user complete" })
    }
    // 
var putAPI = async(req, res) => {
        let { id, STN_Name, Age, ClassID } = req.body;
        if (!id || !STN_Name || !Age || !ClassID) {
            res.status(200).json({ mess: "Miss required params" })
        }
        await pool.promise().query('update students set STN_Name=?,Age=?,ClassID=? where id=?', [STN_Name, Age, ClassID, id])
        res.status(200).json({ mess: "update user complete" })
    }
    // 
var deleteAPI = async(req, res) => {
    let id = req.params.id
    if (!id) {
        res.status(200).json({ mess: "Miss required params" })
    }
    await pool.promise().query("delete from students where id = ?", [id])
    res.status(200).json({ mess: "delete user complete" })
}


module.exports = {
    getAPI,
    postAPI,
    putAPI,
    deleteAPI
}