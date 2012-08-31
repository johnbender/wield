//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.append = function( append, el ) {
		var e = el || this.e;

		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.appendChild( append );
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");