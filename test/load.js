QUnit.config.autostart = false;

require({ baseUrl: "../src/" });

requirejs.config({
  shim: {
		'test.js': [
			"wield",
			"methods",
			"methods/addclass",
			"methods/after",
			"methods/append",
			"methods/attr",
			"methods/before",
			"methods/empty",
			"methods/html",
			"methods/prop",
			"methods/remove",
			"methods/text",
			"methods/removeattr",
			"methods/removeclass",
			"methods/replacewith",
			"methods/unwrap",
			"methods/wrap",
			"dom",
			"find"
    ]
	}
});

require( ["test.js"], QUnit.start );
