define( "wield.dom.before", [ "wield.dom" ], function( dom ) {
	dom.prototype.before = function( before, el ) {
		var e = el || this.e;

		e.parentNode.insertBefore( before, e );
	};
});
