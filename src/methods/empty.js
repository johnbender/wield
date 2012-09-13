//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.empty = function( element ) {
		// Remove any remaining nodes
		while ( element.firstChild ) {
			element.removeChild( element.firstChild );
		}

		return element;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
