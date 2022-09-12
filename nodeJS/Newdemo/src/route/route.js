import express from 'express';
import homecontroller from '../controller/homecontroller'
// sử dụng hàm router của express để điều hướng router 
let route = express.Router();

const createroute = (app) => {
    // khi đường dẫn rỗng: localhost/ 
    // response : các phản hồi thương sử dụng(send,status,json,sendFile,redirect..)
    //res.send('Hello World!');
    // request : các yêu cầu thương sử dụng(param,body,query,url,header..)
    // nói cho express biết là chạy tren cổng nào , và tham số thứ 2 là hàm callback , chỉ khi nào server chạy trên cổng này thì mới thực thi

    route.get('/', (req, res) => { res.render('../views/demohtml.ejs') })
    route.get('/demo', (req, res) => { res.send('Hello demo1!') })
    route.get('/demoEJS', (req, res) => { res.render('EJS2.ejs') })
    route.get('/conn1', homecontroller.conn1)
    route.get('/conn2', homecontroller.conn2)
    route.get('/conn3', homecontroller.conn3)
    route.post('/from_post', homecontroller.connPostSTD)
    route.post('/from_edit', homecontroller.connEditSTD)
    route.get('/delete/:id', homecontroller.deleteUser)


    route.get('/selectdata', homecontroller.selectdata)




    route.get('/testapi2', (req, res) => {
        condb4.query('select * from id', (err, data) => {
            console.log(data);
            res.send(data)
        })
    })


    return app.use("/", route)
}

export default createroute;