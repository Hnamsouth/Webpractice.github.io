// import thư viện express cú pháp cũ
// express Express :giúp làm  nhanh,  đơn giản hóa  , tối giản cho Node.js
//const express = require('express')
// cú pháp mới
import express from 'express';
import configViewengine from './config/viewEngine';
import 'dotenv/config' // 
import createroute from './route/route'

const app = express()
const port = process.env.PORT;
configViewengine(app);
createroute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})