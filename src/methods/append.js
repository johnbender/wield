//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	// register append for Wield.Dom object definition
	methods.dom.append = function( e, add ) {
		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.appendChild( add );
		}

		return e;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");