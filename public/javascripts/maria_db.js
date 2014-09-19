define([],function() {
  "use strict";
	var mysql = require('mysql');
    var console = global.console || window.console;
    
    var conn = mysql.createConnection({
        host: "192.1.31.21",
        user: "yeojoy",
        password: "yeojoy",
        database: "test"
    });
    return conn;

});
