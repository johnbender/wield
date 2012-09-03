//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.remove = function( remove ) {
		// NOTE: if remove is provided we assume that this
		//       is being invoked as a standalone function
		//       otherwise we assume it's being invoked with
		//       a Wield.Dom object receiever
		var e = remove ? remove : this._e;

		if ( e.parentNode ) {
			e.parentNode.removeChild( e );
		}

		return this;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
