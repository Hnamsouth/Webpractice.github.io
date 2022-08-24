import express from 'express';

// hàm configViewengine sẽ sử dụng tại server.js  app sẽ là express 
const configViewengine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

// chia sẻ các function giữa các file khác nhau để sử dụng
export default configViewengine