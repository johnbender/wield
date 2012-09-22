(function( Wield ) {
	module( "Wield.Dom.prototype.after" );

	test( "after works", function() {
		var fixture = new Wield.Dom( document.getElementById("after") ),
			span = document.createElement("span");

		equal( fixture.element.parentNode.childNodes.length, 1, "the fixture is present and has child elements" );

		deepEqual( fixture, fixture.after(span), "after is chainable" );

		equal( fixture.element.parentNode.childNodes.length, 2, "the fixture is present but is empty" );
		equal( span, fixture.element.parentNode.childNodes[1], "the span is the second child" );
	});

	test( "after with object receiver works with Wield objects", function() {
		var fixture = new Wield.Dom( document.getElementById("after") ),
			span = new Wield.Dom( document.createElement("span") );

		equal( fixture.element.parentNode.childNodes.length, 1, "the fixture is present and has child elements" );

		deepEqual( fixture, fixture.after(span), "after is chainable" );

		equal( fixture.element.parentNode.childNodes.length, 2, "the fixture is present but is empty" );
		equal( span.element, fixture.element.parentNode.childNodes[1], "the span is the second child" );
	});

	test( "after works as a standalone function", function() {
		var fixture = document.getElementById( "after" ),
			span = document.createElement("span");

		equal( fixture.parentNode.childNodes.length, 1, "the fixture is present and has child elements" );

		Wield.Methods.after( fixture, span );

		equal( fixture.parentNode.childNodes.length, 2, "the fixture is present but is empty" );
		equal( span, fixture.parentNode.childNodes[1], "the span is the second child" );
	});

	module( "Wield.Dom.prototype.append" );

	test( "append works", function() {
		var fixture = new Wield.Dom( document.getElementById("append") );

		equal( fixture.element.childNodes.length, 0, "the fixture is empty" );

		deepEqual( fixture, fixture.append(document.createElement("span")), "method is chainable" );

		equal( fixture.element.childNodes.length, 1, "the fixture has one child" );
	});

	test( "append with object receiver works with wield objects", function() {
		var fixture = new Wield.Dom( document.getElementById("append") );

		equal( fixture.element.childNodes.length, 0, "the fixture is empty" );

		fixture.append( new Wield.Dom(document.createElement("span")) );

		equal( fixture.element.childNodes.length, 1, "the fixture has one child" );
	});

	test( "append is a noop for anything not Node.ELEMENT_NODE || Node.DOCUMENT_FRAGMENT_NODE", function() {
		expect( 0 );

		var textNode = new Wield.Dom({
			nodeType: Node.TEXT_NODE,
			appendChild: function() {
				ok( false, "appendChild was called" );
			}
		});

		textNode.append( document.createElement("span") );
	});

	test( "append works as a standalone function", function() {
		var fixture = document.getElementById( "append" );

		equal( fixture.childNodes.length, 0, "the fixture is empty" );

		Wield.Methods.append(
			fixture,
			document.createElement("span")
		);

		equal( fixture.childNodes.length, 1, "the fixture has one child" );
	});

	module( "Wield.Dom.prototype.attr" );

	test( "attr works", function() {
		var fixture = new Wield.Dom( document.getElementById("attr") );

		equal( fixture.attr( 'data-foo' ), undefined, "attr returns undefined before data-foo is set" );
		equal( fixture.attr( 'data-foo', true ), fixture, "the object is returned" );
		equal( fixture.attr( 'data-foo' ), "true", "attr returns true after data-foo is set" );
		equal( fixture.element.getAttribute( 'data-foo' ), "true", "attr returns true after data-foo is set" );
	});

	test( "attr works as a standalone function", function() {
		var fixture = document.getElementById("attr");

		equal( Wield.Methods.attr(fixture, 'data-foo'), undefined, "attr returns undefined before data-foo is set" );
		equal( Wield.Methods.attr(fixture, 'data-foo', true), true, "the value is returned" );
		equal( Wield.Methods.attr(fixture, 'data-foo'), "true", "attr returns true after data-foo is set" );
		equal( fixture.getAttribute("data-foo"), "true", "attr returns true after data-foo is set" );
	});

	test( "attr defaults to prop call when getAttribute is not defined", function() {
		var prop = Wield.Methods.prop,
			e = { nodeType: 1 }, name = "foo", value = "bar";

		expect( 3 );

		Wield.Methods.prop = function( elem, passedName, passedValue ) {
			equal( elem, e, "object is the same" );
			equal( passedName, name, "name is the same" );
			equal( passedValue, value, "value is the same" );
		};

		Wield.Methods.attr( e, name, value );

		Wield.Methods.prop = prop;
	});

	module( "Wield.Dom.prototype.before" );

	test( "before works", function() {
		var fixture = new Wield.Dom( document.getElementById("before") ),
			span = document.createElement("span");

		equal( fixture.element.parentNode.childNodes.length, 1, "the fixture is present and has child elements" );

		deepEqual( fixture, fixture.before(span), "before is chainable" );

		equal( fixture.element.parentNode.childNodes.length, 2, "the fixture is present but is empty" );
		equal( span, fixture.element.parentNode.childNodes[0], "the span is the second child" );
	});

	test( "before works", function() {
		var fixture = new Wield.Dom( document.getElementById("before") ),
			span = new Wield.Dom( document.createElement("span") );

		equal( fixture.element.parentNode.childNodes.length, 1, "the fixture is present and has child elements" );

		deepEqual( fixture, fixture.before(span), "before is chainable" );

		equal( fixture.element.parentNode.childNodes.length, 2, "the fixture is present but is empty" );
		equal( span.element, fixture.element.parentNode.childNodes[0], "the span is the second child" );
	});

	test( "before works as a standalone function", function() {
		var fixture = document.getElementById( "before" ),
			span = document.createElement("span");

		equal( fixture.parentNode.childNodes.length, 1, "the fixture is present and has child elements" );

		Wield.Methods.before( fixture, span );

		equal( fixture.parentNode.childNodes.length, 2, "the fixture is present but is empty" );
		equal( span, fixture.parentNode.childNodes[0], "the span is the second child" );
	});

	module( "Wield.Dom.prototype.empty" );

	test( "empty works", function() {
		var fixture = new Wield.Dom( document.getElementById("empty") );

		equal( fixture.element.childNodes.length, 2, "the fixture is present and has child elements" );

		deepEqual( fixture, fixture.empty(), "empty is chainable" );

		equal( fixture.element.childNodes.length, 0, "the fixture is present but is empty" );
	});

	test( "empty works as a standalone function", function() {
		var fixture = document.getElementById("empty");

		equal( fixture.childNodes.length, 2, "the fixture is present and has child elements" );

		Wield.Methods.empty( fixture );

		equal( fixture.childNodes.length, 0, "the fixture is present but is empty" );
	});

	module( "Wield.Dom.find" );

	if( document.querySelector ) {
		test( "find works", function() {
			var fixture = Wield.Dom.find( "#qunit-fixture" );

			equal( fixture.element.id, "qunit-fixture", "querySelector is used" );
		});

		test( "find works when invoked standalone", function() {
			var $ = Wield.Dom.find,
				fixture = $( "#qunit-fixture" );

			equal( fixture.element.id, "qunit-fixture", "querySelector is used" );
		});
	}

	test( "raises and exception when no finder is defined", function() {
		Wield.Dom.finder = undefined;

		QUnit.throws(function() {
			Wield.Dom.find( "foo" );
		});
	});

	module( "Wield.Dom.prototype.html" );

	test( "html works", function() {
		var fixture = new Wield.Dom( document.getElementById("html") );

		equal( fixture.html(), "foo", "the html is returned" );
	});

	test( "html works as a standalone function", function() {
		var fixture = document.getElementById("html");

		equal( Wield.Methods.html( fixture ), "foo", "the html is returned" );
	});

	module( "Wield.Dom.prototype.prop" );

	test( "prop works", function() {
		var fixture = new Wield.Dom( document.getElementById("prop") );

		equal( fixture.prop( 'checked' ), true, "prop returns true before checked is set" );
		equal( fixture.prop( 'checked', false ), fixture, "the object is returned" );
		equal( fixture.prop( 'checked' ), false, "prop returns true after checked is set" );
		equal( fixture.element.checked, false, "prop returns true after checked is set" );
	});

	test( "prop works as a standalone function", function() {
		var fixture = document.getElementById("prop");

		equal( Wield.Methods.prop( fixture, 'checked' ), true, "prop returns false before checked is set" );
		equal( Wield.Methods.prop( fixture, 'checked', false ), false, "the value is returned" );
		equal( Wield.Methods.prop( fixture, 'checked' ), false, "prop returns true after checked is set" );
		equal( fixture.checked, false, "prop returns true after checked is set" );
	});

	test( "prop fixes the attribute name where appropriate", function() {
		var fixture = document.getElementById("prop");

		equal( fixture.tabIndex, "0", "value has been set" );

		Wield.Methods.prop( fixture, "tabindex", 1 );

		equal( fixture.tabIndex, "1", "value has been set" );
	});

	module( "Wield.Dom.prototype.remove" );

	test( "remove works", function() {
		var fixture = new Wield.Dom( document.getElementById("remove") );

		ok( document.getElementById("remove") !== null, "the fixture is present" );

		deepEqual( fixture, fixture.remove(), "remove is chainable" );

		equal( document.getElementById("remove"), null, "the fixture is gone" );
	});

	test( "remove works as a standalone function", function() {
		var fixture = document.getElementById("remove");

		ok( document.getElementById("remove") !== null, "the fixture is present" );

		Wield.Methods.remove( fixture );

		equal( document.getElementById("remove"), null, "the fixture is gone" );
	});

	test( "remove is a noop withiout a parent node", function() {
		expect( 0 );

		var fixture = new Wield.Dom({
			parentNode: null
		});

		// If `e.parentNode.removeChild` is called it'll throw an exception
		// not an amazing test :/
		fixture.remove();
	});

	module( "Wield.Dom.prototype.replaceWith" );

	test( "replaceWith works", function() {
		var fixture = new Wield.Dom( document.getElementById("replace") ),
		replacement = document.createElement( "div" );

		ok( document.getElementById("replace") !== null, "the fixture is present" );
		equal( document.getElementById("replacement"), null, "the replacement is not yet present" );

		replacement.id = "replacement";
		deepEqual( fixture, fixture.replaceWith( replacement ), "replaceWith is chainable" );

		equal( document.getElementById("replace"), null, "the fixture is gone" );
		ok( document.getElementById("replacement") !== null, "the replacement is present" );
	});

	test( "replaceWith works as a standalone function", function() {
		var fixture = document.getElementById("replace"),
		replacement = document.createElement( "div" );

		ok( document.getElementById("replace") !== null, "the fixture is present" );
		equal( document.getElementById("replacement"), null, "the replacement is not yet present" );

		replacement.id = "replacement";
		Wield.Methods.replaceWith( fixture, replacement );

		equal( document.getElementById("replace"), null, "the fixture is gone" );
		ok( document.getElementById("replacement") !== null, "the replacement is present" );
	});

	module( "Wield.Dom.prototype.text" );

	test( "text works", function() {
		var fixture = new Wield.Dom( document.getElementById("text") );

		equal( fixture.text(), "foobar", "the concatenated text is returned" );
	});

	test( "text works as a standalone function", function() {
		var fixture = document.getElementById("text");

		equal( Wield.Methods.text( fixture ), "foobar", "the concatenated text is returned" );
	});

	test( "setting text works", function() {
		var fixture = new Wield.Dom( document.getElementById("text") );

		fixture.text( "fiz" );

		equal( fixture.text(), "fiz", "the new text is returned" );
	});

	test( "setting text works with text node", function() {
		var fixture = new Wield.Dom( document.getElementById("text") ),
			textNode = document.createTextNode( "fiz" );

		ok( fixture.text() !== "fiz", "the text is not equal to our set value" );

		fixture.text( textNode );

		equal( fixture.text(), "fiz", "the new text is returned" );
	});

	test( "setting text works with text node", function() {
		var fixture = new Wield.Dom( document.getElementById("text") ),
			textNode = document.createTextNode( "fiz" );

		ok( fixture.text() !== "fiz", "the text is not equal to our set value" );

		fixture.text( textNode );

		equal( fixture.text(), "fiz", "the new text is returned" );
	});

	test( "setting text works with Wield wrapped text node", function() {
		var fixture = new Wield.Dom( document.getElementById("text") ),
			textNode = new Wield.Dom( document.createTextNode( "fiz" ) );

		ok( fixture.text() !== "fiz", "the text is not equal to our set value" );

		fixture.text( textNode );

		equal( fixture.text(), "fiz", "the new text is returned" );
	});

	module( "Wield.Dom.prototype.unwrap" );

	test( "unwrap works", function() {
		var fixture = new Wield.Dom( document.getElementById("unwrap") ),
			wrapped = document.getElementById( "wrapped" );

		equal( wrapped.parentNode.id, "unwrap", "the fixture is wrapped" );

		deepEqual( fixture, fixture.unwrap(), "unwrap is chainable" );

		equal( wrapped.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );
	});

	test( "unwrap works as a standalone function", function() {
		var fixture = document.getElementById( "unwrap" ),
			wrapped = document.getElementById( "wrapped" );

		equal( wrapped.parentNode.id, "unwrap", "the fixture is wrapped" );

		Wield.Methods.unwrap( fixture );

		equal( wrapped.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );
	});

	module( "Wield.Dom.prototype.wrap" );

	test( "wrap works", function() {
		var fixture = new Wield.Dom( document.getElementById("wrap") ),
			wrapper = document.getElementById( "wrapper" );

		equal( fixture.element.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		deepEqual( fixture, fixture.wrap( wrapper ), "wrap is chainable" );

		equal( fixture.element.parentNode.id, "wrapper", "the fixture is wrapped" );
	});

	test( "wrap with object receiver works with wield objects", function() {
		var fixture = new Wield.Dom( document.getElementById("wrap") ),
			wrapper = new Wield.Dom( document.getElementById("wrapper") );

		equal( fixture.element.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		fixture.wrap( wrapper );

		equal( fixture.element.parentNode.id, "wrapper", "the fixture is wrapped" );
	});

	test( "wrap works as a standalone function", function() {
		var fixture = new Wield.Dom( document.getElementById("wrap") ),
			wrapper = document.getElementById( "wrapper" );

		equal( fixture.element.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		Wield.Methods.wrap( fixture.element, wrapper );

		equal( fixture.element.parentNode.id, "wrapper", "the fixture is wrapped" );
	});

	test( "wrap uses innermost child of the wrapper", function() {
		var fixture = new Wield.Dom( document.getElementById("wrap") ),
			wrapper = new Wield.Dom( document.getElementById( "wrapper" ) );

		wrapper.append( document.createElement("span") );

		equal( fixture.element.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		fixture.wrap( wrapper.element );

		equal( fixture.element.parentNode.id, "", "the fixture is wrapped" );
		equal( fixture.element.parentNode.nodeName, "SPAN", "the fixture is wrapped" );
	});

}( window.Wield ));
