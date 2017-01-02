var	MongoClient = require('mongodb').MongoClient,
	// mongoose = require('mongoose'),
	userSchema,
	projectSchema,
	articleSchema,
	db;


// schemas

// userSchema 	= MongoClient.schema({
// 	name	: String,
// 	email	: String,
// 	img		: String
// })

// projectSchema 	= MongoClient.schema({
// 	title	: String,
// 	slug	: String,
// 	img		: String,
// 	content	: String,
// 	category: Array
// })

// articleSchema 	= MongoClient.schema({
// 	title	: String,
// 	slug	: String,
// 	img		: String,
// 	content	: String,
// 	category: Array
// })

// return 
db = {
	MongoClient : MongoClient,
	url : "mongodb://localhost:27017/softbord_db",
	// model : {
	// 	user : MongoClient.model('user', userSchema),
	// 	project : MongoClient.model('project', projectSchema),
	// 	article : MongoClient.model('article', articleSchema),

	// }
};


module.exports = db;