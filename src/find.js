//>>excludeStart("exclude", pragmas.exclude);
define( "wield.dom.find", [ "dom" ], function() {
//>>excludeEnd("exclude");

	Wield.Dom.find = function( selector ) {
		var Dom = this;

		// If a finder has been defined on Wield.Dom
		// use it with the selector or throw and exception
		if( Dom.finder ){

			// construct a new Wield.Dom object using the element
			// retrieved with the selectore
			return new Dom( Dom.finder(selector) );
		} else {
			throw "Wield.Dom.finder not defined";
		}
	};

	// Default to query selector where it exists
	if( document.querySelector ){
		Wield.Dom.finder = function( selector ) {
			return document.querySelector( selector );
		};
	}

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");