'use strict';

var helpers = {};

helpers.setupPageRoute = function(router, name, middleware, middlewares, controller) {
	middlewares = middlewares.concat([middleware.registrationComplete, middleware.pageView, middleware.pluginHooks]);

	router.get(name, middleware.busyCheck, middleware.buildHeader, middlewares, controller);
	router.get('/api' + name, middlewares, controller);
	//console.log('setupPageRoute--------------------------------------------------');
	//console.log(name);
	//console.log(middlewares);
	//console.log(controller);
};

module.exports = helpers;