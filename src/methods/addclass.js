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

				if ( !~setClass.indexOf( " " + value + " " ) ) {
					setClass += value + " ";
				}

				elem.className = methods.trim(setClass);
			}
		}

		return elem;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
