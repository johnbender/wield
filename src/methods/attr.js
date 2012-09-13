//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.attr = function( el, name, value ) {
		// NOTE see readme about invocation patterns
		var elem = this._e ? (value = name, name = el, this._e) : el,
			nodeType = elem.nodeType, ret;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nodeType === 3 || nodeType === 8 || nodeType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return dom.prop( elem, name, value );
		}

		if ( value ) {
			// using string coercion for fewer bytes :/
			elem.setAttribute( name, "" + value );
			return "" + value;
		} else {
			ret = elem.getAttribute( name );

			// force null to undefined
			return ret === null ? undefined : ret;
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");