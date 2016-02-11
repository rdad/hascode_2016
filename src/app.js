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

	var commander = new Commander();

	// Examples !
	commander.load(1, 2, 3, 4);
	commander.load(5, 6, 7, 8);
	commander.deliver('a', 'b', 'c', 'd');
	commander.load(9, 10, 11, 12);
	console.log(commander.build());


})(jQuery);