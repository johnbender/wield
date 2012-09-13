//>>excludeStart("exclude", pragmas.exclude);
define([ "methods", "methods/remove" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.unwrap = function( parent ) {
		var children = parent.childNodes,
			l = children.length;

		while( l-- ){
			methods.after( parent, children[l] );
		}

		methods.remove( parent );

		return parent;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
