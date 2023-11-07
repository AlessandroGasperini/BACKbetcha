const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({
    path: "./config.env"
});
const port = process.env.PORT || 3333;

app.use(cors({
    origin: '*'
}));

app.use(express.json({
    limit: '100mb'
}));

app.use(express.urlencoded({
    extended: true
}));


const dbo = require('./db/connect');


app.use(require("./Routes/players"))
app.use(require("./Routes/admin"))
app.use(require("./Routes/createBet"))
app.use(require("./Routes/games"))
app.use(require("./Routes/getPersonalBet"))




app.listen(port, () => {
    dbo.connectToServer(function (err) {
        if (err) {
            console.error(err);
        }
    })
    console.log('server is running on ', port)
});