import express from 'express';
import APIlocal from '../controller/APIocal'

const route = express.Router();

const routeUSER = (app) => {

    route.get('/login-api', APIlocal.loginAPI);
    route.post('/register-api,')



    return app.use("/", route)
}

export default routeUSER;