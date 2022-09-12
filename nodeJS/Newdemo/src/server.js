// import thư viện express cú pháp cũ
// express Express :giúp làm  nhanh,  đơn giản hóa  , tối giản cho Node.js
//const express = require('express')
// cú pháp mới
import express from 'express';
import configViewengine from './config/viewEngine';
import 'dotenv/config' // 
import createroute from './route/route'
import createRoute from './route/api.js';
import conDA from './config/conDoAn';
import bodyParser from 'body-parser';
import routeUSER from './route/routDOAN';



const app = express()
app.use(bodyParser.text({ limit: '50mb' }));
const port = process.env.PORT;

// giúp chuyền data từ client lên db
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// cho phep tat ca cac client co the truy cap khi tao api
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


configViewengine(app);
// declare route WEB
createroute(app);
// declare route API
createRoute(app);
//  declare route API Eproject
routeUSER(app);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})