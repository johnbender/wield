//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.prepend = function( el, add ) {
		// NOTE: if the second argument (used to add to the first)
		//       is defined we ignore the object receiver, otherwise
		//       we use the first argument as the additive dom element
		//       and the object receiver's `e` property
		var e = add ? el : (add = this.args(el), this._e);

		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.insertBefore( add, e.firstChild );
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");