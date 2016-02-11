
function algo(data){

	// data is your magic object !!! :D
		
		get_ordered_distance(data);

		var orders 		= comput_fast_delivery(data);
		var nb_drones 	= data.drones.list.length;
		var drone_id 	= 0;

		for(var j = 0; j<orders.fast.length; j++){

			var order = orders.fast[j];

			for(var k = 0; k<order.warehouse_classed.length; j++){

				var wid = order.warehouse_classed[k].whid;
				var ok = disponibility(order, data.warehouse[wid]);

				if(ok === true){

					for(var i = 0; i<order.products_ids.length; i++){
						commander.load(drone_id, 1, order.products_ids[i], wid);
					}

					for(var m = 0; m<order.products_ids.length; m++){
						commander.deliver(drone_id, j, 1, order.products_ids[m]);
					}

					drone_id++;
					if(drone_id>nb_drones)	return;
				}
			}
		}
		

		console.log(orders);
		console.log(data);

		$('#result').text(commander.build());
}