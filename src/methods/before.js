//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.before = function( e, add ) {
		e.parentNode.insertBefore( add, e );

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
