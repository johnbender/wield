//>>excludeStart("exclude", pragmas.exclude);
define([ "methods" ], function( methods ) {
//>>excludeEnd("exclude");
	var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, useBrowserTrim;

	useBrowserTrim =  String.prototype.trim && !"\uFEFF\xA0".trim();

	methods.trim = useBrowserTrim ?
		function( string ) {
			return string.trim();
		} :
	function( text ) {
		return text.toString().replace( rtrim, "" );
	};
//>>excludeStart("exclude", pragmas.exclude);
});
//>>excludeEnd("exclude");
