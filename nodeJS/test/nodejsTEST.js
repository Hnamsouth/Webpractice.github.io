// dungf require de import cac module
var http = require('http');
//built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//mô-đun tích hợp được gọi là HTTP, cho phép Node.js truyền dữ liệu qua Giao thức truyền siêu văn bản (HTTP).
var fs = require('fs');
// file system module allows you to work with the file system on your computer.
var url = require('url');
//Mô-đun URL chia một địa chỉ web thành các phần có thể đọc được.


//create a server object:


// http.createServer(function(vl1, vl2) {
//     //Hàm sads được truyền vào phương thức http.createServer (), sẽ được thực thi khi ai đó cố gắng truy cập vào máy tính trên cổng 8080.
//     vl2.writeHead(200, { 'Content-Type': 'text/html' });
//     var q = url.parse(vl1.url, true).query;
//     var txt = q.year + " " + q.month;
//     // res.write(req.url); 
//     //write a response to the client: viet 1 phan hoi lai may khach
//     vl2.end(txt); // ket thuc phan hoi
// }).listen(8080);


// localhost:8080

http.createServer(function(req, res) {
    fs.readFile('./nodejsTEST.js', function(error, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    })
}).listen(8080);







// let ar = ["hoang nam", 1, 3, 1, 43, 3]
// let ar2 = ["hoSDA DAS", 32, 33, 51, 543, 53]

// let cp = [...ar, ...ar2, 5, 3, 1, 5, 5]

// const oj = {
//     name: 'hoang',
//     age: 23,
//     address: "ha noi"
// }

// let cpOJ = oj 
// // OR ={oj}   OR ={...oj}
// console.log(cpOJ)