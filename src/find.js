//>>excludeStart("exclude", pragmas.exclude);
define([ "dom" ], function( dom ) {
//>>excludeEnd("exclude");

	/**
	Find allows for simple pluggable selection and instantiation of the Wield.Dom objects.

	Example:

	    // In browsers that support querySelector
	    Wield.Dom.find( "#foo" );

	Has the same value as:

	    // In browsers that support querySelector
	    (new Wield.Dom( document.querySelector("#foo") ));

	@param {String} selector The selector to use with the defined Wield.Dom.finder method
	@returns {Wield.Dom}
	@method find
	@static
	@for Dom
	 */
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

	/**
	The finder property on Wield.Dom determines the selection engine used with Wield.Dom.find.
	The default is document.querySelector in browsers that support it, but you could just as
	easily use something like [Sizzle](http://sizzlejs.com).

	Example:

	    Wield.Dom.finder = window.Sizzle;
	    Wield.Dom.find( "div[data-crazy-town^='selector']");

	@property finder
	@type function
	@default function( selector ){ return document.querySelector( selector ); }
	 */
	dom.finder = undefined;

	// Default to query selector where it exists
	if( document.querySelector && !dom.finder ){

		dom.finder = function( selector ) {
			return document.querySelector( selector );
		};
	}

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");