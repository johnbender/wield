//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");

	// NOTE this method absolutely punts on creating html from
	//      strings. It seems all together too likely that anyone
	//      who might use this library would be knowledgeable enough
	//      to manage creating and appending elements appropriately
	methods.html = function( e ) {
		// getting the html value
		return e.nodeType === 1 ? e.innerHTML : undefined;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
