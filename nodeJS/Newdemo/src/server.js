// import thư viện express cú pháp cũ
// express Express :giúp làm  nhanh,  đơn giản hóa  , tối giản cho Node.js
//const express = require('express')
// cú pháp mới
import express from 'express';
import configViewengine from './config/viewEngine';
import mysql from 'mysql2'
import 'dotenv/config' // 
// Dotenv là một mô-đun không phụ thuộc, tải các biến môi trường từ một .envtệp vào process.env. Lưu trữ cấu hình trong môi trường tách biệt
// ---- npm install express
/*  tạo 1 biến gán giá trị là hàm express để gọi các yêu cầu tới express*/
// ----   npm i --save-exact ejs@3.1.8  (install viewengine ejs)
/*viewengin sử lý các điều kiện logic bên trong html(chạy javascript ngay bên trong các thẻ htlm)*/
// install body-parser : npm i --save-exact body-parser@1.20.0
/*dùng để phân tích cú pháp chuyển đổi data thành json */
// install nodemore: tự động restart lại server npm i --save-exact nodemon@2.0.19 
// npm install --save-exact @babel/core@7.18.13 @babel/node@7.18.10 @babel/preset-env@7.18.10
/*“Babel là một trình biên dịch Javascript mã nguồn mở và miễn phí có chức năng chính dùng để biên dịch ECMAScript thành phiên bản tương thích ngược cho JavaScript
có thể chạy trên các môi trường JavaScript cũ hơn. Babel là công cụ phổ biến để sử dụng các tính năng mới nhất của Javascript.”*/
const app = express()
    // khi chạy trên localhost thì sẽ có các trên máy sẽ có nhiều project chạy các cổng khác nhau, nên đặt cổng nào ko bị chùng
    //const port = 1234 //  nếu set port ngay tại file server.js thì chỉ cần const port = 1234
    // set port tại file evn 
const port = process.env.PORT;
// thêm các route gần tương tự như angular 
// gọi đến express với phương thức get với đường dẫn rỗng hoặc any và hàm callback sẽ thực hiện 2 action
// request :  yêu cầu tới server và response : phản hồi từ server
configViewengine(app)
app.get('/', (req, res) => {
    // khi đường dẫn rỗng: localhost/ 
    // response : các phản hồi thương sử dụng(send,status,json,sendFile,redirect..)
    //res.send('Hello World!');
    // request : các yêu cầu thương sử dụng(param,body,query,url,header..)
    res.render('demohtml.ejs')
})
app.get('/demo', (req, res) => {
    res.send('Hello demo1!')
})
app.get('/demoEJS', (req, res) => {
        res.render('EJS2.ejs')
    })
    // nói cho express biết là chạy tren cổng nào , và tham số thứ 2 là hàm callback , chỉ khi nào server chạy trên cổng này thì mới thực thi
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// connect database  (mysql2)

const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    database: "test"
})
var querry1 = `select * from class`
con.query(querry1, (err, data, fields) => {

})