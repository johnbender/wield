//>>excludeStart("exclude", pragmas.exclude);
define([ "core", "methods", "methods/all" ], function( Wield, methods ) {
//>>excludeEnd("exclude");

	/**
	Wield.Dom is a fluent wrapper around HTMLElements (ie, it allows method chaining
	ala jQuery). All the static methods available on are available on the Wield.Dom prototype
	and the only difference is that the first argument is wrapped by a Wield.Dom instance.

	Example:

	    var foo = new Wield.Dom( document.getElementById("foo") ),
	        span = document.creatElement( "span" ),
	        div = document.creatElement( "div" );

	    foo.append( span ).append( div );

	is equivelant to

	    var foo = document.getElementById("foo"),
	        span = document.creatElement( "span" ),
	        div = document.creatElement( "div" );

	    Wield.Dom.append(Wield.Dom.append( foo, span ), div);

	@class Dom
	@see Methods
	@constructor
	@param {HTMLElement} element The element on which to perform operations
	 */
	Wield.Dom = function Dom( element ){
		this._e = this.element = element;
	};

	var dom = Wield.Dom.prototype = {}, l, fn, altRet;

	dom.toElem = function( add ) {
		return add && add._e ? add._e : add;
	};

	// We use a function to avoid the value capture issue
	function define( name, use, make ) {
		dom[ name ] = make( methods[use] );
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
	for( name in methods ) {
		fn = methods[name];

		if( fn.length === 1 ) {
			define( name, name, function(fn) {
				return function() {
					fn( this._e );
					return this;
				};
			});
		}

		if( fn.length === 2 ) {
			define( name, name, function( fn ) {
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
	altRet = [ "text", "html", "prop", "attr" ];
	l = altRet.length;

	while( l-- ) {
		define( altRet[l], altRet[l], function( fn ) {
			return function( name, value ) {
				var ret = fn( this._e, dom.toElem(name), value );
				return value !== undefined ? this : ret;
			};
		});
	}

	dom._op = {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after"
	};

	// NOTE the inverted functions are just an argument
	//      swap. Really this is only necessary or valuable for
	//      Wield.Dom since with the vanilla methods you can
	//      simply swap the arguments :/
	for( name in dom._op ) {
		define( name, dom._op[name], function( fn ) {
			return function( add ) {
				fn( dom.toElem(add), this._e );
				return this;
			};
		});
	}

//>>excludeStart("exclude", pragmas.exclude);
	// TODO not a fan of excluding the return with a pragma
	return Wield.Dom;
});
//>>excludeEnd("exclude");