(function( Wield ) {
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

		throws(function() {
			Wield.Dom.find( "foo" );
		});
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

		Wield.Dom.prototype.append(
			fixture,
			document.createElement("span")
		);

		equal( fixture.childNodes.length, 1, "the fixture has one child" );
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

		Wield.Dom.prototype.wrap( fixture.element, wrapper );

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

	module( "Wield.Dom.prototype.append" );

	test( "remove works", function() {
		var fixture = new Wield.Dom( document.getElementById("remove") );

		ok( document.getElementById("remove") !== null, "the fixture is present" );

		deepEqual( fixture, fixture.remove(), "remove is chainable" );

		equal( document.getElementById("remove"), null, "the fixture is gone" );
	});

	test( "remove works as a standalone function", function() {
		var fixture = document.getElementById("remove");

		ok( document.getElementById("remove") !== null, "the fixture is present" );

		Wield.Dom.prototype.remove( fixture );

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
		Wield.Dom.prototype.replaceWith( fixture, replacement );

		equal( document.getElementById("replace"), null, "the fixture is gone" );
		ok( document.getElementById("replacement") !== null, "the replacement is present" );
	});
}( window.Wield ));
