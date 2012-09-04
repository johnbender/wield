//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom",
				 "methods/append",
				 "methods/before",
				 "methods/remove" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.replaceWith = function( element, replace ) {
		// NOTE see readme about invocation patterns
		element = replace ? element : (replace = dom.toElem(element), this._e);

		var next = element.nextSibling, parent;

		if ( next ) {
			dom.before( next, replace );
		} else {
			parent = element.parentNode;
			dom.append( parent, replace );
		}

		dom.remove( element );

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
