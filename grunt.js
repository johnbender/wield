var requirejs = require( 'requirejs' );

/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: '<json:package.json>',

		meta: {
			banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},

		concat: {
			dist: {
				src: ['<banner:meta.banner>', 'compiled/wield.compiled.js' ],
				dest: 'compiled/wield.js'
			},

			jquery: {
				src: ['<banner:meta.banner>', 'compiled/wield.compiled.jquery.js' ],
				dest: 'compiled/wield.jquery.js'
			}
		},

		min: {
			dist: {
				src: ['<config:concat.dist.dest>'],
				dest: 'compiled/<%= pkg.name %>.min.js'
			},

			jquery: {
				src: ['<config:concat.jquery.dest>'],
				dest: 'compiled/<%= pkg.name %>.jquery.min.js'
			}
		},

		qunit: {
			files: ['test/**/*.html']
		},

		lint: {
			files: ['grunt.js', 'src/**/*.js']
		},

		watch: {
			files: '<config:lint.files>',
			tasks: 'build'
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},

			globals: {
				define: true,
				require: true
			}
		},

		requirejs: {
			main: {
				baseUrl: 'src',
				name: 'wield',
				out: 'compiled/wield.compiled.js',
				wrap: {
					startFile: 'build/start.js',
					endFile: 'build/end.js'
				},
				pragmasOnSave: { exclude: true },
				findNestedDependencies: true,
				skipModuleInsertion: true,
				optimize: 'none'
			},

			jquery: {
				baseUrl: 'src',
				name: 'jquery',
				out: 'compiled/wield.compiled.jquery.js',
				wrap: {
					startFile: 'build/start.jquery.js',
					endFile: 'build/end.jquery.js'
				},
				pragmasOnSave: { exclude: true },
				findNestedDependencies: true,
				skipModuleInsertion: true,
				optimize: 'none'
			}
		},

		uglify: {}
	});

	grunt.registerTask( 'compile', function() {
		var require = grunt.config.get( 'requirejs' );

		// pull the includes together using require js
		requirejs.optimize( require.main );
		requirejs.optimize( require.jquery );
	});

	grunt.registerTask( 'build', 'compile concat min' );

	// Default task.
	grunt.registerTask('default', 'lint qunit concat min');
};
