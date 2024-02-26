import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from "./db.js";
import { routes } from './Routes/routes.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
    origin:"*",
    credentials:true
}))
dotenv.config();
//handing the json size
app.use(express.json({
    limit: "16kb"
}));
// handling the url encoded data
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

//handling the static files
app.use(express.static('public'))

//handling the cookie
app.use(cookieParser());


routes.forEach((route) => {
    app[route.method](route.path, route.handler);
})

app.listen(8001,() =>{
    console.log("Server is running on port 8001");
    connectDB();
})

