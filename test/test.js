(function( Wield ) {
	module( "Wield.Dom.find" );

	if( document.querySelector ) {
		test( "find works", function() {
			var fixture = Wield.Dom.find( "#qunit-fixture" );

			equal( fixture.e.id, "qunit-fixture", "querySelector is used" );
		});

		test( "find works when invoked standalone", function() {
			var $ = Wield.Dom.find,
				fixture = $( "#qunit-fixture" );

			equal( fixture.e.id, "qunit-fixture", "querySelector is used" );
		});
	}

	test( "raises and exception when no finder is defined", function() {
		Wield.Dom.finder = undefined;

		throws(function() {
			Wield.Dom.find( "foo" );
		});
	});

	module( "new Wield.Dom" );

	module( "Wield.Dom.prototype.append" );

	test( "append works", function() {
		var fixture = new Wield.Dom( document.getElementById("append") );

		equal( fixture.e.childNodes.length, 0, "the fixture is empty" );

		fixture.append( document.createElement("span") );

		equal( fixture.e.childNodes.length, 1, "the fixture has one child" );
	});

	test( "append is a noop for anything not Node.ELEMENT_NODE || Node.DOCUMENT_FRAGMENT_NODE", function() {
		expect( 0 );

		var textNode = new Wield.Dom({
			nodeType: Node.TEXT_NODE,
			appendChild: function() {
				ok( false, "appendChild was called" );
			}
		});

		textNode.append();
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

		equal( fixture.e.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		fixture.wrap( wrapper );

		equal( fixture.e.parentNode.id, "wrapper", "the fixture is wrapped" );
	});

	test( "wrap works as a standalone function", function() {
		var fixture = new Wield.Dom( document.getElementById("wrap") ),
			wrapper = document.getElementById( "wrapper" );

		equal( fixture.e.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		Wield.Dom.prototype.wrap( fixture.e, wrapper );

		equal( fixture.e.parentNode.id, "wrapper", "the fixture is wrapped" );
	});

	test( "wrap uses innermost child of the wrapper", function() {
		var fixture = new Wield.Dom( document.getElementById("wrap") ),
			wrapper = new Wield.Dom( document.getElementById( "wrapper" ) );

		wrapper.append( document.createElement("span") );

		equal( fixture.e.parentNode.id, "qunit-fixture", "the fixture isn't wrapped" );

		fixture.wrap( wrapper.e );

		equal( fixture.e.parentNode.id, "", "the fixture is wrapped" );
		equal( fixture.e.parentNode.nodeName, "SPAN", "the fixture is wrapped" );
	});
}( window.Wield ));
