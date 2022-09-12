import express from 'express';
import apiCtl from '../controller/apiCtl.js'

let route = express.Router();

const createroute = (app) => {
    route.get('/get-api', apiCtl.getAPI)
    route.post('/post-api', apiCtl.postAPI)
    route.put('/put-api', apiCtl.putAPI)
    route.delete('/delete-api/:id', apiCtl.deleteAPI)

    route.get('/get-img', apiCtl.getIMG)
    route.post('/post-img', apiCtl.postIMG)


    return app.use("/", route)
}

export default createroute;