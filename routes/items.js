var express = require('express');
// $ npm install requirejs -g
// var requirejs = require('requirejs');
// $ npm install mysql -g
// var mysql = requirejs('../public/javascripts/maria_db');

var db_pool = require('../libs/db_pool');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
/*  
  mysql.connect();
  var queryString = 'SELECT * from items';
  mysql.query(queryString, function(err, rows, fields) {
    if (err) {
      console.log(JSON.stringify(err));
      throw err;
    } 

    var returnObj = new Array();
    var length = rows.length;
    for (i = 0; i < length; i++) {
      returnObj[i] = rows[i]; 
    }
    
    res.send(returnObj); 

  });
  mysql.end();  
*/
  db_pool.acquire(function(err, db) {
    if (err) return res.end("CONNECTION error: " + err);

    db.query("SELECT * FROM items", [], function(err, rows, columns) {
      db_pool.release(db);
      if (err) return res.end("QUERY ERROR: " + err);
      
      res.send(rows);
    });
  });
});

module.exports = router;