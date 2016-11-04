// (function(module) {
// 	"use strict";
	var bodyParser = require('body-parser');
	var posts = require('../../src/posts.js');
	var app;

	var comments = {};

	comments.init = function(params, callback) {
		console.log('is there wrong');

		app = params.router;
			// middleware = params.middleware,
			// controllers = params.controllers;
		callback();
	};

	comments.addScripts = function(scripts,callback) {
		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};

	comments.getPosts = function(postsData,callback) {
		app.post('/post/getComments',function(req,res) {
			res.json(JSON.stringify(postsData));
		});

		callback(null, postsData);
	};

	module.exports = comments;
// }(module));
