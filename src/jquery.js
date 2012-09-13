//>>excludeStart("exclude", pragmas.exclude);
define( "wield.jquery", ["core"], function() {
		require( ["methods"], function( methods ) {
			require( ["methods/all"], function() {
//>>excludeEnd("exclude");
			/*global jQuery, methods*/

			// move Wield's html as it's read only
			methods.dom.getHtml = methods.dom.html;
			methods.dom.html = undefined;

			jQuery.dom = jQuery.extend( jQuery.dom, methods.dom );
//>>excludeStart("exclude", pragmas.exclude);
		});
	});
});
//>>excludeEnd("exclude");