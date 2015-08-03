require.config({
	baseUrl: '/bower_components/',
	paths: {
		backbone: 'backbone/backbone',
		'semantic-ui': 'semantic-ui/dist/semantic'
	},
	packages: [

	]
});

// 加载app，并运行
require(['/js/common/app.js'], function(app) {
	app.init();
});