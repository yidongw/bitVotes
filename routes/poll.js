const express = require('express');
var router = express.Router();

const pool = require('../utils/mysql');




router.post('/create', (req,res) => {
  console.log("req.body:", req.body);
  const test = {test: "123"};

  console.log(test);

  pool.query('INSERT INTO test SET ?', test, (err, result, fields) => {
    if (err) {
      console.log("err ocurred", err);
    } else {
      console.log("the solution is", result);
    }
  })

  // pool.query('INSERT INTO poll SET ?', user, (err, result, fields) => {
  //   if (err) {
  //     console.log("err ocurred", err);
  //     res.send({"code": 400, "msg": "error ocrred"});
  //   } else {
  //     console.log("the solution is", result);
  //     res.send({"code": 200, "msg": "user registered successfully"});
  //   }
  // })
  return res.json({body: req.boy});

});

router.get('/getpoll/:id', (req,res) => {
  console.log(req.params.id);

  return res.json({id: "123123"});
});

module.exports = router;
