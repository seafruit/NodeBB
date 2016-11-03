(function(module) {
	"use strict";
	var comments = {};
	comments.addScripts = function(scripts,callback) {
		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		callback(null, scripts);
	};
	comments.getPosts = function(postsData,callback) {
		console.log("------------------------");
		callback(null, postsData);
	};
	module.exports = comments;
}(module));
