//>>excludeStart("exclude", pragmas.exclude);
define([ "core", "methods", "methods/all" ], function( Wield, methods ) {
//>>excludeEnd("exclude");

	Wield.Dom = function Dom( element ){
		this._e = this.element = element;
	};

	var dom = Wield.Dom.prototype = {}, l, fn, directReturn, exceptions, stringReturns;

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

	stringReturns = [ "text", "html", "prop", "attr" ];

	l = stringReturns.length;

	while( l-- ) {
		defineMethod( stringReturns[l], function( fn ) {
			return function( name, value ) {
				var ret = fn( this._e, dom.toElem(name), value );
				return value !== undefined ? this : ret;
			};
		});
	}

//>>excludeStart("exclude", pragmas.exclude);
	// TODO not a fan of excluding the return with a pragma
	return dom;
});
//>>excludeEnd("exclude");