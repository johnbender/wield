//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	/**
	Append the second argument to the list of childnodes of the first argument.

		 var append = document.createElement( "div" ),
		     parent = document.getElementById( "parent" );

		 Wield.Methods.append( parent, append );

		 // => parent
		 // => parent.innerHTML == "<div></div>"

	@param {HTMLElement} element The parent element
	@param {HTMLElement} parent The element to append
	@return {HTMLElement} The parent element
	@method append
	@for Methods
	@static
	*/
	methods.append = function( element, add ) {
		if ( element.nodeType === 1 || element.nodeType === 11 ) {
			element.appendChild( add );
		}

		return e;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");