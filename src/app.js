(function($){
	'use strict';

	var parser = new Parser();
	parser.parseFile('../dump/busy_day.in', function(data) {
		
		// data is your magic object !!! :D
		console.log(data);

	});

})(jQuery);