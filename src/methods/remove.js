//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.remove = function( e ) {
		if ( e.parentNode ) {
			e.parentNode.removeChild( e );
		}

		return e;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
