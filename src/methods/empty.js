//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.empty = function( element ) {
		// NOTE see readme about invocation patterns
		var element = element ? element : this._e;

		// Remove any remaining nodes
		while ( element.firstChild ) {
			element.removeChild( element.firstChild );
		}

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
