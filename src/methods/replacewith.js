//>>excludeStart("exclude", pragmas.exclude);
define([ "methods",
	 "methods/append",
	 "methods/before",
	 "methods/remove" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.replaceWith = function( element, replace ) {
		var next = element.nextSibling, parent;

		if ( next ) {
			methods.before( next, replace );
		} else {
			methods.append( element.parentNode, replace );
		}

		methods.remove( element );

		return element;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
