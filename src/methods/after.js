//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.after = function( el, add ) {
		// NOTE: if the second argument (used to add to the first)
		//       is defined we ignore the object receiver, otherwise
		//       we use the first argument as the additive dom element
		//       and the object receiver's `e` property
		var e = add ? el : (add = el, this._e);

		e.parentNode.insertBefore( add, e.nextSibling );
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
