const 
	express 	= require('express'),
	app 		= express(),
	admin 		= express(),
	session 	= require('express-session'),
	hostname 	= '127.0.0.1',
	port 		= '8080',
	assert 		= require('assert');

// config

var indexRoutes = require('./routes/index');
var adminRoutes = require('./routes/admin');

	// client routing
app.use('/',	indexRoutes);

	// admin routing
admin.use('/',	adminRoutes);

// controllers
console.log(app.path())

// others
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
