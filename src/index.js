import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from "./db.js";
import { routes } from './Routes/routes.js';

const app = express();
dotenv.config();
app.use(bodyParser.json());


routes.forEach((route) => {
    app[route.method](route.path, route.handler);
})

app.listen(8001,() =>{
    console.log("Server is running on port 8001");
    connectDB();
})

