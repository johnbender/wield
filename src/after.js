define([ "wield.dom" ], function( dom ) {
	dom.prototype.after = function( after, el ) {
		var e = el || this.e;

		e.parentNode.insertBefore( after, e.nextSibling );
	};
});
