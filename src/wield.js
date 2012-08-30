define( "wield", [], function() {
	var Wield = window.Wield = {};
	return Wield;
});

define( "wield.dom", [ "wield" ], function( Wield ) {
	Wield.Dom = function Dom( e ){
		this.e = e;
	};

	Wield.Dom.prototype = {};
	return Wield.Dom;
});