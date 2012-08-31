//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.prepend = function( prepend, el ) {
		var e = el || this.e;

		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.insertBefore( prepend, e.firstChild );
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");