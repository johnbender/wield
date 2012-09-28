//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	methods.addClass = function( elem, value ) {
		var classNames = [value], setClass, c, cl;

		if ( elem.nodeType === 1 ) {
			if ( !elem.className ) {
				elem.className = value;
			} else {
				setClass = " " + elem.className + " ";

				for ( c = 0, cl = classNames.length; c < cl; c++ ) {
					if ( !~setClass.indexOf( " " + classNames[ c ] + " " ) ) {
						setClass += classNames[ c ] + " ";
					}
				}

				// elem.className = jQuery.trim( setClass );
				elem.className = methods.trim(setClass);
			}
		}

		return elem;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
