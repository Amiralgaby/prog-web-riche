
module.exports = function(grunt) {

  	// Project configuration.
  	grunt.initConfig({
  		concat: {
	     	js: {
			// les classes en premières
	        	src: ['src/js/article.js', 'src/js/*.js'],
	        	dest: 'dist/js/app.js'
	    	}
	    },
	    uglify: {
    		js: {
	      		files: {
				// 'destination' : ['source']
	        		'dist/js/app.min.js': ['dist/js/app.js'],
	        		'dist/js/vue.global.min.js' : ['node_modules/vue/dist/vue.global.js']
	      		}
	    	}
	    },
	    cssmin: {
		css: {
			files: {
				'dist/css/style.min.css' : ['src/css/style.css']
			}
		}
	    },
	    copy: {
		  	js: {
			    files: [
					// includes files within path
					{src: ['node_modules/jquery/dist/jquery.min.js'], dest: 'dist/js/jquery.min.js', filter: 'isFile'}
			    ]
		  	}
		}
  	});

  	grunt.loadNpmTasks('grunt-contrib-copy');
  	grunt.loadNpmTasks('grunt-contrib-concat');
  	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

  	grunt.registerTask('mep', ['concat', 'uglify', 'cssmin', 'copy']);
  	grunt.registerTask('mep-js', ['concat:js', 'uglify:js', 'copy:js']);
	grunt.registerTask('mep-css', 'cssmin');
};
