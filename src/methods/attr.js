//>>excludeStart("exclude", pragmas.exclude);
define([ "methods", "methods/prop" ], function( methods ) {
//>>excludeEnd("exclude");
	// NOTE xml documents not supported, downcasing attributes
	//      also not supported
	methods.attr = function( elem, name, value ) {
		// NOTE see readme about invocation patterns
		var nodeType = elem.nodeType, ret;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nodeType === 3 || nodeType === 8 || nodeType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return methods.prop( elem, name, value );
		}

		if ( value !== undefined ) {
			// using string coercion for fewer bytes :/
			elem.setAttribute( name, "" + value );
			return value;
		} else {
			ret = elem.getAttribute( name );

			// force null to undefined
			return ret === null ? undefined : ret;
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");