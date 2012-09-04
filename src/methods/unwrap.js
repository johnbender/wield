//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom", "methods/remove" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.unwrap = function( parent ) {
		// NOTE see readme about invocation patterns
		var parent = parent ? parent : this._e,
			children = parent.childNodes,
			l = children.length;

		while( l-- ){
			dom.after( parent, children[l] );
		}

		dom.remove( parent );

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
