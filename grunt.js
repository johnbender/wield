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
				src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		min: {
			dist: {
				src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
				dest: 'dist/<%= pkg.name %>.min.js'
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
			baseUrl: 'src',
			name: 'wield',
			out: "compiled/wield.compiled.js",
			wrap: {
				startFile: 'build/wrap.start',
				endFile: 'build/wrap.end'
			},
			pragmasOnSave: { exclude: true },
			findNestedDependencies: true,
			skipModuleInsertion: true,
			optimize: 'none'
		},

		uglify: {}
	});

	grunt.registerTask( 'compile', function() {
		var require = grunt.config.get( 'requirejs' );

		// pull the includes together using require js
		requirejs.optimize( require );
	});


	// Default task.
	grunt.registerTask('default', 'lint qunit concat min');
};
