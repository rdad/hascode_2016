
function comput_fast_delivery(data){

	var nbo = data.orders.length,
		j, k, order, nbp,
		max_weight = data.drones.maxWeight,
		weight 	  = 0,
		fast_list = [],
		slow_list = [];

	for(j = 0; j<nbo; j++){

		order 	= data.orders[j];
		nbp 	= order.products_ids.length;
		weight 	= 0;

		for(k = 0; k<nbp; k++){
			
			var pid = order.products_ids[k];
			weight += data.map.products_weight[pid];
		}

		if(weight > max_weight){
			slow_list.push(j);
		}else{
			fast_list.push(j);
		}
	}

	return {
		fast: fast_list,
		slow: slow_list
	}
}