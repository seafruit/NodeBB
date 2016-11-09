var url = "mongodb://localhost:27017/nodebb";
var mongoClient = require('mongodb').MongoClient;

exports.saveComment = function (comment,com_id,callback){

	mongoClient.connect(url,function(err,db){

		var collection = db.collection('objects');

		collection.update({"pid": parseInt(comment.pid)},
			{
				$push: {
					"comments": {
						"com_id": com_id,
						"com_content": comment.com_content
					}
				}

			}, function (err, result) {
				callback(result);
				db.close();
			});
	});
}
