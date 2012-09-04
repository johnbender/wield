//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom", "methods/extract", "methods/remove" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.unwrap = function( parent ) {
		// NOTE see readme about invocation patterns
		var parent = parent ? parent : this._e;

		jQuery.dom.extract( parent );
		jQuery.dom.remove( parent );

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
