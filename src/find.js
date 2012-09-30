//>>excludeStart("exclude", pragmas.exclude);
define([ "dom" ], function( dom ) {
//>>excludeEnd("exclude");

	dom.find = function( selector ) {
		// If a finder has been defined on Wield.Dom
		// use it with the selector or throw and exception
		if( dom.finder ){
			// construct a new Wield.Dom object using the element
			// retrieved with the selector
			return new dom( dom.finder(selector) );
		} else {
			throw "Wield.Dom.finder not defined";
		}
	};

	// Default to query selector where it exists
	if( document.querySelector && !dom.finder ){
		dom.finder = function( selector ) {
			return document.querySelector( selector );
		};
	}

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");