//>>excludeStart("exclude", pragmas.exclude);
define( "wield.jquery", ["core"], function() {
	require( ["dom"],function() {
		require( ["methods/methods"], function() {
//>>excludeEnd("exclude");
			/*global jQuery, dom*/
			jQuery.dom = jQuery.extend( jQuery.dom, dom );
//>>excludeStart("exclude", pragmas.exclude);
		});
	});
});
//>>excludeEnd("exclude");