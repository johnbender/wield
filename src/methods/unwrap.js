//>>excludeStart("exclude", pragmas.exclude);
define([ "methods", "methods/remove" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.unwrap = function( parent ) {
		var children = parent.childNodes,
			l = children.length;

		while( l-- ){
			methods.dom.after( parent, children[l] );
		}

		methods.dom.remove( parent );

		return parent;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
