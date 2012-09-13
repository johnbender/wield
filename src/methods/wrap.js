//>>excludeStart("exclude", pragmas.exclude);
define([ "methods", "methods/append", "methods/before"], function( methods ) {
//>>excludeEnd("exclude");

	methods.dom.wrap = function( e, add ) {
		// put the wrapper in the DOM just before the element to be wrapped
		if( e.parentNode ) {
			methods.dom.before( e, add );
		}

		// get innermost child element of the wrapper
		while ( add.firstChild && add.firstChild.nodeType === 1 ) {
			add = add.firstChild;
		}

		// append the element to the innermost child of the wrapper
		methods.dom.append( add, e );

		return e;
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");