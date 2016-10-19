const 
	express 	= require('express'),
	app 		= express(),
	hostname 	= '127.0.0.1',
	port 		= '8080',
	MongoClient 	= require('mongodb').MongoClient,
	assert 		= require('assert'),
	db_url		= "mongodb://localhost:27017/test";

// config

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });


// router

app.get('/', function(req, res, next){
	console.log(req.originalUrl)
	res.send('{hello wsd}')
})


app.get('/home', function(req, res, next){

	var r = [];

	MongoClient.connect(db_url, function(err, db){
		assert.equal(null, err);

		var cursor = db.collection('testData').find();
		cursor.forEach(function(doc, err){
			assert.equal(null, err);

			r.push(doc);
		}, function(){
			db.close();
			res.send(r)
		});
	});
})


// controllers


// others
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
