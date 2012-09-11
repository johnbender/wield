//>>excludeStart("exclude", pragmas.exclude);
define([ "wield.dom" ], function( dom ) {
//>>excludeEnd("exclude");

	// NOTE this method absolutely punts on creating html from
	//      strings. It seems all together too likely that anyone
	//      who might use this library would be knowledgeable enough
	//      to manage creating and appending elements appropriately
	dom.html = function( el ) {
		// NOTE see readme about invocation patterns
		var e = el ? el : this._e;

		// getting the html value
		return e.nodeType === 1 ? e.innerHTML : undefined;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
