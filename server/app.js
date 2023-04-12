const express = require('express')
const app = express();
require('dotenv').config({path : './config.env'})
require('./db/connect')
app.use(express.json());

const port = process.env.PORT;

app.use(require('./router/auth'));

app.listen(port, () => {
    console.log("Server is listening on port " + port)
})