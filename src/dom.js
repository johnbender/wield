//>>excludeStart("exclude", pragmas.exclude);
define( "dom", [ "core", "methods", "methods/all" ], function( Wield, methods ) {
//>>excludeEnd("exclude");

	Wield.Dom = function Dom( element ){
		this._e = this.element = element;
	};

	var dom = Wield.Dom.prototype = {}, l, fn, directReturn, exceptions;

	dom.toElem = function( add ) {
		return add && add._e ? add._e : add;
	};

	function defineMethod( name, make ) {
		dom[ name ] = make( methods[name] );
	}

	for( method in methods ) {
		fn = methods[method];

		if( fn.length === 1 ) {
			defineMethod( method, function(fn) {
				return function() {
					fn( this._e );
					return this;
				};
			});
		}

		if( fn.length === 2 ) {
			defineMethod( method, function( fn ) {
				return function( first ) {
					fn( this._e, dom.toElem(first) );
					return this;
				};
			});
		}
	}

	// TODO try to minimize the size impact here
	dom.text = function( value ) {
		var ret = methods.text( this._e, dom.toElem(value) );
		return value !== undefined ? this : ret;
	};

	dom.html = function( value ) {
		var ret = methods.html( this._e, dom.toElem(value) );
		return value !== undefined ? this : ret;
	};

	dom.prop = function( name, value ) {
		var ret = methods.prop( this._e, name, value );
		return value !== undefined ? this : ret;
	};

	dom.attr = function( name, value ) {
		var ret = methods.attr( this._e, name, value );
		return value !== undefined ? this : ret;
	};

//>>excludeStart("exclude", pragmas.exclude);
	// TODO not a fan of excluding the return with a pragma
	return dom;
});
//>>excludeEnd("exclude");