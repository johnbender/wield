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

	// We use a function to avoid the value capture issue
	function defineMethod( name, make ) {
		dom[ name ] = make( methods[name] );
	}

	// NOTE for all the methods defined on out method object
	//      we want to define an equivalent on the Wield.Dom
	//      prototype.
	//
	//      Methods of length one only take anelement argument
	//      so we wrap them and pass in the _e property.
	//
	//      Methods of length two take a second argument that
	//      can either be a dom object or a wield wrapper of the
	//      same.
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

	// NOTE for each of the following methods we want to
	//      return a string value and not the Wield.Dom
	//      "instance"
	//
	//      Because toElem ignores anything that's not
	//      a wield object (checks for _e prop) that arg
	//      can just as easily be as string (eg, text)
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
	return Wield.Dom;
});
//>>excludeEnd("exclude");