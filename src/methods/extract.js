//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom", "methods/after" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.extract = function( parent ) {
		// NOTE see readme about invocation patterns
		var parent = parent ? parent : this._e,
			children = parent.childNodes,
			l = children.length;

		while( l-- ){
			jQuery.dom.after( parent, children[l] );
		}

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
