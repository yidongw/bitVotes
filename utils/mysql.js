var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bchpoll',
  insecureAuth: true,
});

module.exports = pool;
