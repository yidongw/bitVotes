// const http = require('http');
// const net = require('net');
// const url = require('url');

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

const pool = require('./utils/mysql');

const poll = require('./routes/poll');



var corsOptions = {
    origin:true,
    credentials: true
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use(helmet())

app.use('/api/poll', poll);

app.listen(port, () => console.log(`server started on port ${port}`));
