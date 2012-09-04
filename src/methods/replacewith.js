//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.replaceWith = function( element, replace ) {
		// NOTE: if the second argument (used to replace the first)
		//       is defined we ignore the object receiver, otherwise
		//       we use the first argument as the replacement dom element
		//       and the object receiver's `e` property
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
