// refs : mysql connection pool 관리(http://rocksea.tistory.com/175)
var generic_pool = require('generic-pool');
var mysql = require('mysql');

var pool = generic_pool.Pool({
  name: 'mysql',
  create: function(callback) {
    var config = {
      host: '127.0.0.1',
      port: '3306',
      user: 'yeojoy',
      password: 'duwhd12#',
      database: 'yeojoy' 
    };

    var client = mysql.createConnection(config);
    client.connect(function (err) {
      if (err) {
        console.log(err);
      }
      callback(err, client);
    });
  },
  destroy: function(client) {
    client.end();
  },
  min: 7,
  max: 10,
  idleTimeoutMillis: 300000,
  log: true

});

process.on('exit', function() {
  pool.drain(function() {
    pool.destroyAllNow();
  });
});

module.exports = pool;
