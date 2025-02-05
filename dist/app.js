"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const session = require("express-session");
const cookieParser = require('cookie-parser');
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(cookieParser());
// enabling cors for all requests by using cors middleware
app.use((0, cors_1.default)());
// Enable pre-flight
app.options("*", (0, cors_1.default)());
app.use(session({
    key: "user_sid",
    secret: "supersecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 86400000,
    },
}));
const port = Number(process.env.PORT || 4000);
app.use(cookieParser());
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map