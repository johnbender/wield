//>>excludeStart("exclude", pragmas.exclude);
define(["methods", "methods/prop.fix" ], function( methods ) {
//>>excludeEnd("exclude");

	// TODO exclude this in jQuery builds
	var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, getSetAttribute;

	// make sure we don't get variable bleed in the builds
	getSetAttribute = (function() {
		var div;

		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );

		// camelcase attribute className == ie6/7
		return div.className !== "t";
	})();

	methods.removeAttr = function( elem, value ) {
		var propName, attrNames, name = value, isBool, i = 0;

		if ( value && elem.nodeType === 1 ) {
			propName = methods.prop.fix[ name ] || name;
			isBool = rboolean.test( name );

			// See #9699 for explanation of this approach (setting first, then removal)
			// Do not do this for boolean attributes (see #10870)
			if ( !isBool ) {
				methods.attr( elem, name, "" );
			}

			elem.removeAttribute( getSetAttribute ? name : propName );

			// Set corresponding property to false for boolean attributes
			if ( isBool && propName in elem ) {
				elem[ propName ] = false;
			}
		}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
