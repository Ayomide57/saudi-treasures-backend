import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";


const session = require("express-session");
const cookieParser = require('cookie-parser');


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
      secret: "supersecret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        expires: 86400000,
      },
    })
  );

const port = Number(process.env.PORT || 3000);
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});