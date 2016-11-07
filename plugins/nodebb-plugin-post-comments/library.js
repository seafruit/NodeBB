(function(module) {
	"use strict";
	var bodyParser = require('body-parser');
	var posts, comments = {};

	comments.init = function(params, callback) {
		console.log('is there wrong');

		var app = params.router;
			// middleware = params.middleware,
			// controllers = params.controllers;
		app.post('/posts',function(req,res){
			// console.log(posts);
			res.json(JSON.stringify(posts));
		});
		callback();
	};

	comments.addScripts = function(scripts,callback) {
		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};

	comments.getPosts = function(postsData,callback) {
		// app.post('/post/getComments',function(req,res) {
		// 	res.json(JSON.stringify(postsData));
		// });
		posts = postsData;
		callback(null, postsData);
	};
    //
	// comments.getPostsId = function (req, res, callback) {
	// 	res.json(JSON.stringify(posts.posts));
	// };

	module.exports = comments;
}(module));

