//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.wrap = function( el, add ) {
		// NOTE: if the second argument (used to add to the first)
		//       is defined we ignore the object receiver, otherwise
		//       we use the first argument as the additive dom element
		//       and the object receiver's `e` property
		var e = add ? el : (add = this.args(el), this._e);

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
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");