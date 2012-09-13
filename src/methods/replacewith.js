//>>excludeStart("exclude", pragmas.exclude);
define([ "methods",
	 "methods/append",
	 "methods/before",
	 "methods/remove" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.replaceWith = function( element, replace ) {
		var next = element.nextSibling, parent;

		if ( next ) {
			methods.dom.before( next, replace );
		} else {
			methods.dom.append( element.parentNode, replace );
		}

		methods.dom.remove( element );

		return element;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
