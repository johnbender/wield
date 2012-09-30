QUnit.config.autostart = false;

require({ baseUrl: "../src/" });

requirejs.config({
  shim: {
		'test.js': [
			"wield"
    ]
	}
});

require( ["test.js"], QUnit.start );
