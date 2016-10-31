(function(module) {
	"use strict";

	var comments = {};

	comments.addScripts = function(scripts,callback) {
		console.log('here you are!');
		scripts.push('plugins/nodebb-plugin-post-comments/lib/main.js');
		// // scripts.push('plugins/nodebb-plugin-topic-badges/public/lib/main.js');
		// // scripts.push('./public/lib/main.js');
		callback(null, scripts);
	};

	module.exports = comments;
}(module));
