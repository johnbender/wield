//>>excludeStart("exclude", pragmas.exclude);
define( ["methods"], function( methods ) {
//>>excludeEnd("exclude");

	methods.removeProp = function( elem, name ) {
		var fix = methods.prop.fix || {};

		// fix the name where it's necessary
		name = fix[ name ] || name;

		// TODO consider handling this directly or reporting it
		// try/catch handles cases where IE balks
		// (such as removing a property on window)
		try {
			elem[ name ] = undefined;
			delete elem[ name ];
		} catch( e ) {}
	};

//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
