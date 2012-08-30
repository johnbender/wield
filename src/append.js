define([ "wield.dom" ], function( dom ) {
	dom.prototype.append = function( append, el ) {
		var e = el || this.e;

		if ( e.nodeType === 1 || e.nodeType === 11 ) {
			e.appendChild( append );
		}
	};
});