//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.html = function( el ) {
		// NOTE see readme about invocation patterns
		var e = el ? el : this._e;

		// getting the html value
		return e.nodeType === 1 ? e.innerHTML : undefined;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
