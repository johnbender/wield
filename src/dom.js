//>>excludeStart("exclude", pragmas.exclude);
define( "wield.dom", [ "core" ], function( Wield ) {
//>>excludeEnd("exclude");

	Wield.Dom = function Dom( e ){
		this._e = this.element = e;
	};

	var dom = Wield.Dom.prototype = {};

//>>excludeStart("exclude", pragmas.exclude);
	// TODO not a fan of excluding the return with a pragma
	return dom;
});
//>>excludeEnd("exclude");