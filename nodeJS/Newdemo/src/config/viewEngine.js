import express from 'express';

// hàm configViewengine sẽ sử dụng tại server.js  app= express()
const configViewengine = (app) => {
    // cho phép người dùng nhìn thầy những tệp trong public such as images, CSS files, and JavaScript files
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

// chia sẻ các function giữa các file khác nhau để sử dụng
export default configViewengine