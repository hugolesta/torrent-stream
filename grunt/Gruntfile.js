module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				separator: '/**/'
			},
			dist: {
				src: [
					'../public/css/cssDev/base.css',
					'../public/css/cssDev/skeleton.css',
					'../public/css/cssDev/layout.css',
					'../public/css/cssDev/selfStyle.css'
				],
				dest: '../public/css/self.css'
			}
		},

		cssmin: {
		  combine: {
		    files: {
		      '../public/css/self.min.css': ['../public/css/self.css']
		    }
		  }
		}

	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.registerTask('default', ['concat', 'cssmin']);

};