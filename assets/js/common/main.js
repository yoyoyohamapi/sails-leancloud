require.config({
	baseUrl: '/bower_components/',
	paths: {
		backbone: 'backbone/backbone',
		'semantic-ui': 'semantic-ui/dist/semantic',
		requirejs: 'requirejs/require',
		jquery: 'jquery/dist/jquery',
		underscore: 'underscore/underscore',
		'jquery-form': 'jquery-form/jquery.form'
	},
	packages: [

	]
});

// 加载app，并运行
require(['/js/common/app.js'], function(app) {
	app.init();
});