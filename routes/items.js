var express = require('express');
// $ npm install requirejs -g
// var requirejs = require('requirejs');
// $ npm install mysql -g
// var mysql = requirejs('../public/javascripts/maria_db');

var db_pool = require('../libs/db_pool');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res) {

  console.log("REQUEST : \n" + JSON.stringify(req.route) + "\n\n");

  db_pool.acquire(function(err, db) {
    if (err) return res.end("CONNECTION error: " + err);

    db.query("SELECT * FROM user", [], function(err, rows, columns) {
      db_pool.release(db);
      if (err) return res.end("QUERY ERROR: " + err);
      
      res.json(rows);
    });
  });
});
*/

//router.param('id', function (requ, res, next, id) {
//  next();
//});

router.get('/:id', function(req, res) {
  var id = req.params.id;
  console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>\n" + JSON.stringify(req.params) + "\n<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log(" >>> ID : " + id + " <<< ");
  db_pool.acquire(function(err, db) {
    db.query("SELECT * FROM items WHERE id = ?", [id], function(err, rows, columns) {
      db_pool.release(db);
      if (err) return res.end(err);
      res.json(rows);
    });
  });
});


router.get('/:id/num/:num', function(req, res) {
  var id = req.params.id;
  var num = req.params.num;
  console.log(" >>>>>>>>>>>>>>>>>>>>>>>>>>>>\n" + JSON.stringify(req.params) + "\n<<<<<<<<<<<<<<<<<<<<<<<<");
  console.log(" >>> ID : " + id + " <<< ");
  db_pool.acquire(function(err, db) {
    db.query("SELECT * FROM items WHERE id = ? and num = ?", [id, num], function(err, rows, columns) {
      db_pool.release(db);
      if (err) return res.end(err);
      res.json(rows);
    });
  });
});

/*
mysql insert
var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function(err, result) {
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
*/

module.exports = router;
