//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.remove = function( remove ) {
		// NOTE see readme about invocation patterns
		var e = remove ? remove : this._e;

		if ( e.parentNode ) {
			e.parentNode.removeChild( e );
		}

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
