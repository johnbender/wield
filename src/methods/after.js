//>>excludeStart("exclude", pragmas.exclude);
define( "methods/after", [ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.after = function( e, add ) {
		e.parentNode.insertBefore( add, e.nextSibling );

		return e;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
