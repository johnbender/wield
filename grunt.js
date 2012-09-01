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
			}
		},

		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>', 'compiled/wield.js'],
				dest: 'compiled/<%= pkg.name %>.min.js'
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
			tasks: 'lint qunit'
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
			default: {
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
				out: 'compiled/wield.jquery.js',
				wrap: {
					startFile: 'build/start.jquery.js',
					endFile: 'build/start.jquery.js'
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
		requirejs.optimize( require.default );
		requirejs.optimize( require.jquery );
	});

	grunt.registerTask( 'build', 'compile concat min' );

	// Default task.
	grunt.registerTask('default', 'lint qunit concat min');
};
