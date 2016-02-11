
(function(){


	$.get('../dump/logo.in', function(result){

		var lines = result.split('\n');
		console.log(lines);
		$('#result').text(result);
	});
})();