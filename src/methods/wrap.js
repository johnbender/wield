//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom", "methods/append", "methods/before"], function( dom ) {
//>>excludeEnd("exclude");

	dom.wrap = function( el, add ) {
		// NOTE see readme about invocation patterns
		var e = add ? el : (add = dom.toElem(el), this._e);

		// put the wrapper in the DOM just before the element to be wrapped
		if( e.parentNode ) {
			dom.before( e, add );
		}

		// get innermost child element of the wrapper
		while ( add.firstChild && add.firstChild.nodeType === 1 ) {
			add = add.firstChild;
		}

		// append the element to the innermost child of the wrapper
		dom.append( add, e );

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");