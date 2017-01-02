var	app			= require('express').Router(),
	database	= require('../db'),
	assert		= require('assert');

/* admin middleware. */
app.all('/__admin__/*', function(req, res, next){
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
	console.log('on')
	next();
})

// admin home
app.get('/__admin__', function (req, res, next) {
	res.send('admin')

	next()
})

module.exports = app;