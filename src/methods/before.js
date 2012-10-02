//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	/**
	Insert the second argument as a sibling above the first argument in the document.

		 var before = document.createElement( "div" ),
		     sibling = document.getElementById( "sibling" ),
		     parent = documetn.getElementById( "parent" );

		 Wield.Methods.append( parent, sibling );
		 Wield.Methods.before( sibling, before );
		 // => sibling
		 // => parent.innerHTML == "<div></div><div id='sibling'></div>"

	@param {HTMLElement} element The sibling element
	@param {HTMLElement} before The element to insert before the sibling
	@return {HTMLElement} The sibling element
	@method before
	@for Methods
	@static
	*/
	methods.before = function( element, before ) {
		element.parentNode.insertBefore( before, element );

		return element;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
