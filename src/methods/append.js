//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.append = function( el, add ) {
		// NOTE see readme about invocation patterns
		var e = add ? el : (add = dom.toElem(el), this._e);

		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.appendChild( add );
		}

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");