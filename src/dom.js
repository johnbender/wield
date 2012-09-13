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
		dom[ name ] = make( methods.dom[name] );
	}

	for( method in methods.dom ) {
		fn = methods.dom[method];

		if( fn.length === 1 ) {
			defineMethod( method, function(fn) {
				return function() {
					fn( this._e );
					return this;
				};
			});
		} else if( fn.length === 2 ) {
			defineMethod( method, function( fn ) {
				return function( first ) {
					fn( this._e, dom.toElem(first) );
					return this;
				};
			});
		}
	}

	dom.text = function( value ) {
		var ret = methods.dom.text( this._e, dom.toElem(value) );
		return value !== undefined ? this : ret;
	};

	dom.html = function( value ) {
		var ret = methods.dom.html( this._e, dom.toElem(value) );
		return value !== undefined ? this : ret;
	};

	dom.prop = function( name, value ) {
		var ret = methods.dom.prop( this._e, name, value );
		return value !== undefined ? this : ret;
	};

	dom.attr = function( name, value ) {
		var ret = methods.dom.attr( this._e, name, value );
		return value !== undefined ? this : ret;
	};

//>>excludeStart("exclude", pragmas.exclude);
	// TODO not a fan of excluding the return with a pragma
	return dom;
});
//>>excludeEnd("exclude");