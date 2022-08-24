var sql = require('mssql');
var http = require('http'),
    fs = require('fs')

function click(data) {
    console.log(data)
}

// config database
var config = {
    user: 'hsouth',
    password: 'AFMhn17397',
    server: 'localhost',
    database: 'TBooks',
    // Custemers
    //synchronize: true,
    trustServerCertificate: true,
    // thêm trustServerCertificate: true, khi gặp lỗi Failed to connect to localhost:1433 - self signed certificate
};

fs.readFile('./index.html', (err, html) => {
        http.createServer(function(request, response) {
            response.writeHead(200, { "Content-Type": "text/html" });
            sql.connect(config, err => {
                if (err) response.write(err);
                let sqlRQ = new sql.Request();
                sqlRQ.query('select * from Books', (err, data) => {
                    response.write(JSON.stringify(data), console.log(data));
                    response.end();
                })
            })

        }).listen(5000)
    })
    /*
    sql.connect(config, err => {
        if (err) console.log(err);
        // create a new Request object
        let sqlRequest = new sql.Request();
        // query to the database and get the records /fields in the data Object
        let sqlQuery = 'select * from Books';
        sqlRequest.query(sqlQuery, (err, data) => {
            if (err) console.log(err);
            // use data 
            // console dữ liệu thành 1 bảng
            console.table(data.recordset);

            console.log(data);
            // giá trị trả về từ data là 1 mảng 
            console.log(data.recordset[0].Name);
            //close the Connection

            sql.close();
        });

        let mssqlQR = 'select Name,Content from Books'
        sqlRequest.query(mssqlQR, (err, data) => {
            click(data);
        });

    })*/