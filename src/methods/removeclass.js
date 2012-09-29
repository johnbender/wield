//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");
	var rclass = /[\t\r\n]/g;

	methods.removeClass = function( elem, value ) {
		var className, setClass, c, cl;

		if ( elem.nodeType === 1 && elem.className ) {
			className = (" " + elem.className + " ").replace( rclass, " " );

			// Remove until there is nothing to remove,
			while ( className.indexOf(" " + value + " ") > -1 ) {
				className = className.replace( " " + value + " " , " " );
			}

			elem.className = methods.trim( className );
		}

		return elem;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
