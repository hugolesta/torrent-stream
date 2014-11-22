require.config({

	paths: {
		jquery: 'libs/jquery-1.11.1.min',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		self:'self',
		templates: '../templates'
	},

	shim: {
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		},
		underscore: {
			exports: "_"
		},
		self: {
			deps: ["backbone"]
		}
	}
})

require(['self'],function( self ){});