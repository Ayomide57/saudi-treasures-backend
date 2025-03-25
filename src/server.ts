import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
//import cron from "node-cron";


import session from "express-session";
import cookieParser from 'cookie-parser';
import HttpException from './utils/HttpException.utils';
import errorMiddleware from './middleware/error.middleware';
import db from './config/db';
import userRouter from '../src/routes/user.route';
import flightRouter from '../src/routes/flight.route';
import hotelRouter from '../src/routes/hotel.route';
import adminRouter from '../src/routes/admin.route';
import notificationRouter from "../src/routes/notification.route";
//import EmailSchedule from "./jobs/EmailSchedule";


const app = express();


dotenv.config();

app.use(express.json());
app.use(cookieParser());
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());
app.use(
  session({
    key: "user_sid",
    secret: "STBsaudi1234treasure",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 86400000,
    },
  })
);

const port = Number(process.env.PORT || 3000);
app.use(cookieParser());

db();
//cron.schedule("* * * * * *", EmailSchedule);

app.use(`/api/users/`, userRouter);
app.use(`/api/flight/`, flightRouter);
app.use(`/api/hotel/`, hotelRouter);
app.use(`/api/admin/`, adminRouter);
app.use(`/api/notification/`, notificationRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});


// Error middleware
app.use(errorMiddleware);



app.listen(port, () =>
    console.log(`🚀 Server running on port ${port}!`));

export default app;


