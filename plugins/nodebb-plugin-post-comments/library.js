var db_save = require('./public/db/save-comments');
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
			res.json(JSON.stringify(posts));
		});
		app.post('/save/comment',function(req,res){
			var pid = req.body.pid;
			var com_id = findCommentId(pid, posts.posts);

			db_save.saveComment(req.body, com_id, function (result) {
				res.status(201).json({value: '保存评论成功！'});
			});
		});
		callback();
	};

	comments.addScripts = function(scripts,callback) {
		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};

	comments.getPosts = function(postsData,callback) {
		posts = postsData;
		callback(null, postsData);
	};

	function findCommentId(pid, posts) {
		for (var post of posts) {
			if (!post.hasOwnProperty("comments")) {
				return 0;
			}
			if (post.pid == pid) {
				return post.comments.length;
			}
		}
	}

	module.exports = comments;
}(module));

