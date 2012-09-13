//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.prop = function( el, name, value ) {
		// NOTE see readme about invocation patterns
		var elem = this._e ? (value = name, name = el, this._e) : el,
			nodeType = elem.nodeType, ret;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nodeType === 3 || nodeType === 8 || nodeType === 2 ) {
			return;
		}

		if ( value !== undefined ) {
			return elem[ name ] = value;
		} else {
			return elem[ name ];
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");