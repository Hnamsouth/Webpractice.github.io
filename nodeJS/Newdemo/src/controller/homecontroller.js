import con from '../config/connDB'
let homepage = (req, res) => {
    return res.render('demohtml.ejs')
}

let ejstest = async(req, res) => {
    var data2 = [];
    var querry1 = `select * from students`;
    // con.query(querry1, (err, data, fields) => {
    //         // console.table(data)
    //         //return res.render('EJS2.ejs', { data: JSON.stringify(data), dataoj: data })
    //     })
    //     // console.log("-----------", data2)

    const [rows, fields] = await con.execute('select * from students');
    console.log("-----------", rows)
    return res.render('EJS2.ejs', { data: JSON.stringify(rows), dataoj: rows })
}

// export nhiều module
module.exports = {
    homepage: homepage,
    ejstest: ejstest
}