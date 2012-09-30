//>>excludeStart("exclude", pragmas.exclude);
define(["core", "methods", "methods/all"], function( Wield, methods ) {
//>>excludeEnd("exclude");
	/*global jQuery, methods*/

	// move Wield's html as it's read only
	methods.getHtml = methods.html;
	methods.html = undefined;

	jQuery.dom = jQuery.extend( jQuery.dom, methods );
//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");