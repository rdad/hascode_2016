(function($){
	'use strict';

	var parser = new Parser();
	parser.parseFile('../dump/busy_day.in', function(data) {
		
		algo(data);
		
	});

	var commander = new Commander();

	// Examples !
	commander.load(1, 2, 3, 4);
	commander.load(5, 6, 7, 8);
	commander.deliver('a', 'b', 'c', 'd');
	commander.load(9, 10, 11, 12);
	console.log(commander.build());


})(jQuery);