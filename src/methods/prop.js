//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.prop = function( elem, name, value ) {
		// NOTE see readme about invocation patterns
		var nodeType = elem.nodeType, ret, fix = methods.prop.fix || {};

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nodeType === 3 || nodeType === 8 || nodeType === 2 ) {
			return;
		}

		// If the methods.prop.fix is included in the build
		// use it, otherwise simply use the name. The purpose
		// is to fix the property names for non jQuery builds
		// and to just use the name for jquery builds since
		// this is already taken care inside jQuery
		name = fix[ name ] || name;

		if ( value !== undefined ) {
			return elem[ name ] = value;
		} else {
			return elem[ name ];
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");