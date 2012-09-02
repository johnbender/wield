//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.remove = function( remove ) {
		// NOTE: if the second argument (used to add to the first)
		//       is defined we ignore the object receiver, otherwise
		//       we use the first argument as the additive dom element
		//       and the object receiver's `e` property
		var e = remove ? remove : this._e;

		if ( e.parentNode ) {
			e.parentNode.removeChild( e );
		}

		// TODO should we undef e/this._e/this.element?
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
