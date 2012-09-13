//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.prepend = function( e, add ) {
		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.insertBefore( add, e.firstChild );
		}

		return e;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");