(function($){
	'use strict';

	var parser = new Parser();
	parser.parseFile('../dump/busy_day.in', function(data) {
		
		console.log(data);
		
		window.commander = new Commander();
		algo(data);
		
	});

	

	// Examples !
	


})(jQuery);