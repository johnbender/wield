//>>excludeStart("exclude", pragmas.exclude);
define( "wield.dom", [ "core" ], function( Wield ) {
//>>excludeEnd("exclude");

	Wield.Dom = function Dom( element ){
		this._e = this.element = element;
	};

	var dom = Wield.Dom.prototype = {};

	dom.toElem = function( add ) {
		return add._e ? add._e : add;
	};

//>>excludeStart("exclude", pragmas.exclude);
	// TODO not a fan of excluding the return with a pragma
	return dom;
});
//>>excludeEnd("exclude");