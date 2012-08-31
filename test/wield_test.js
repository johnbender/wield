(function( Wield ) {
	module( 'Wield.Dom.prototype.append' );

	test( "append works", function() {
		var fixture = new Wield.Dom( document.getElementById("qunit-fixture") );

		equal( fixture.e.childNodes.length, 0, "the fixture is empty" );

		fixture.append( document.createElement("span") );

		equal( fixture.e.childNodes.length, 1, "the fixture has one child" );
	});

	test( "append is a noop Node.ELEMENT_NODE || Node.DOCUMENT_FRAGMENT_NODE", function() {
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
		var fixture = document.getElementById( "qunit-fixture" );

		equal( fixture.childNodes.length, 0, "the fixture is empty" );

		Wield.Dom.prototype.append(
			document.createElement("span"),
			fixture
		);

		equal( fixture.childNodes.length, 1, "the fixture has one child" );
	});
}( window.Wield ));
