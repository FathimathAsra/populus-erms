import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import 'dotenv/config'
import config from "./config.js"
import employeeRoute from './routes/employee.routes.js'
import salaryRoute from './routes/SalaryRecords.js'
import FileUploadRouter from './routes/FileUploadRoutes.js';
import TodoRouter from './routes/ToDo.Route.js';
import assetsRoute from './routes/assetRoutes.js';
import AdminRouter from './routes/AdminUserRoutes.js'



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors());


// Routes Configuration
app.use('/employees', employeeRoute);
app.use('/salary', salaryRoute);
app.use('/assets', assetsRoute);
app.use(FileUploadRouter);
app.use('/api', TodoRouter);
app.use('/api/users', AdminRouter)


// db connetion setup
mongoose.Promise = global.Promise
mongoose.connect(config.dbUri, {});
const connection = mongoose.connection;
connection.once('open', () => { console.log("DB connection successful") })

// server connection test
app.listen(config.port, () => {
    console.log('Connection successful. Listening on the port ' + config.port);
});

app.use(function (err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

