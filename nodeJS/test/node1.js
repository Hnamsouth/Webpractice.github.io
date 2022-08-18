// built-in HTTP module : (mô-dun tích hợp). allows node.js to transfer data over the 
var http = require('http');
// fs : file system module allows you to work with the file system on your computer
var fs = require('fs');
// url module : chia 1 địa chỉ web thành các phần có thể đọc được : The URL module splits up a web address into readable parts.
var url = require('url');

var datahtml;
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
/*  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:8080',
    port: '8080',
    hostname: 'localhost',
    hash: null,
    search: '?year=2017&month=february',
    query: [Object: null prototype] { year: '2017', month: 'february' },
    pathname: '/default.htm',
    path: '/default.htm?year=2017&month=february',
    href: 'http://localhost:8080/default.htm?year=2017&month=february'
}*/
console.log(q)



http.createServer(function(req, res) {
    //Open a file on the server and return its content:
    fs.readFile('nodehtml1.html', (err, data) => {
        save();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // 200 is status code : means OK . - argument is an object containing the response headers - 
        // you should include an HTTP header with the correct content type: 
        res.write(data);
        datahtml = data;
        return res.end();
    });
}).listen(8080);


function save() {
    //fs.appendFile() // thêm nội dung vào bên trong file đã chỉ định. nếu file đó k tồn tại . module sẽ tạo 1 file mới

    fs.appendFile('message.txt', 'hoang nam', (err) => {
        if (err) throw err;
        console.log('Updated');
    });

    // fs.open()     // mở tệp chỉ định để 'w' write , 'r' read ... any nếu file đó k tồn tại . module sẽ tạo 1 file mới
    fs.open('ms2.txt', 'r', (err, data) => {
            if (err) throw err;
            console.log('save!');
        })
        // fs.writeFile()// thay thế file và nội dung bên trong nếu file đó tồn tài. nếu k tồn tại. module sẽ tạo file ms với nội dung  đc chỉ đc
    fs.writeFile('message.txt', 'hello hoang nam dz', (err, data) => {
        if (err) throw err;
        console.log('Done!');
    })

    // method delete a file
    //  fs.unlink( 'message.txt',(err)=>{
    //     if (err) throw err;
    //     console.log('deleted !');
    // })

    // method rename a file with fs module: fs.rename
    fs.rename('message.txt', 'node1.txt', err => {
        if (err) throw err;
        console.log('File renamed');
    })
}





// fs.readFile('demofile1.html', function(err, data) {});