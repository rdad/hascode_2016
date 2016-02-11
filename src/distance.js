
function get_ordered_distance(data){

	var nbo = data.orders.length,
		nbw = data.warehouses.length,
		order,
		house,
		j, k;

	for(j = 0; j<nbo; j++){

		order = data.orders[j];
		var classement = [];

		for(k = 0; k<nbw; k++){

			house 	 = data.warehouses[k];
			var dist = Math.sqrt( Math.pow(order.x - house.x, 2) + Math.pow(order.y - house.y, 2));
			classement.push({
				whid: k,
				dist: dist
			});
		}

		order.warehouse_classed = _.sortBy(classement, function(o) { return o.dist; });

	}
}