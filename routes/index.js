var app			= require('express').Router(),
	database	= require('../db'),
	// bodyParser 	= require('body-parser'),
	assert		= require('assert');


// client middleware

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


// home

app.get('/', homeRequest)
	  .get('/hello', homeRequest);


// All projects
app.get('/projects', getProjects)

// Single project
app.get('/projects/:slug', get);

// functions && CRUD
function create(req, res, next){

}
function get(req, res, next){
	console.log(req.route)	
	res.send(req.route)
}
function getProjects(req, res, next){
	var r = [];

	database.MongoClient.connect(database.url, function(err, db){
		assert.equal(null, err);

		var cursor = db.collection('projects').find();
		cursor.forEach(function(doc, err){
			assert.equal(null, err);

			r.push(doc);
		}, function(){
			db.close();
			res.send(r)
		});
	});
}
function update(req, res, next){

}
function remove(req, res, next){

}

function homeRequest(req, res, next) {
	res.send('home');
}

// params

app.param('slug', function(req, res, next, slug){
	slug = slug.split('-').join('_');

	next();
})




module.exports = app;