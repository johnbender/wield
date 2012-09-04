//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.after = function( el, add ) {
		// NOTE see readme about invocation patterns
		var e = add ? el : (add = dom.toElem(el), this._e);

		e.parentNode.insertBefore( add, e.nextSibling );

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
