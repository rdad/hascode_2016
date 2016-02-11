(function($){
	'use strict';

	var parser = new Parser();
	parser.parseFile('../dump/busy_day.in', function(data) {
		
		// data is your magic object !!! :D
		
		var orders = comput_fast_delivery(data);

		get_ordered_distance(data);

		console.log(orders);

		console.log(data);
		


	});

})(jQuery);