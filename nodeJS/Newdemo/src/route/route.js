import express from 'express';
import homecontroller from '../controller/homecontroller'
// sử dụng hàm router của express để điều hướng router 
let route = express.Router();

const createroute = (app) => {
    route.get('/', (req, res) => {
        // khi đường dẫn rỗng: localhost/ 
        // response : các phản hồi thương sử dụng(send,status,json,sendFile,redirect..)
        //res.send('Hello World!');
        // request : các yêu cầu thương sử dụng(param,body,query,url,header..)
        res.render('../views/demohtml.ejs')
    })
    route.get('/demo', (req, res) => {
        res.send('Hello demo1!')
    })
    route.get('/demoEJS', (req, res) => {
            res.render('EJS2.ejs')
        })
        // nói cho express biết là chạy tren cổng nào , và tham số thứ 2 là hàm callback , chỉ khi nào server chạy trên cổng này thì mới thực thi
    route.get('/ctldemo', homecontroller.homepage)
    route.get('/ejstest', homecontroller.ejstest)


    return app.use("/", route)
}

export default createroute;