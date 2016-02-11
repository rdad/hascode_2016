
function disponibility(order, warehouse){

	var nbo = order.products_ids.length,	
		j,
		stock =  _.clone(warehouse),
		result = true;

	for(j = 0; j<nbo; j++){

		var pid = order.products_ids[j];
		if(stock[pid]>0){
			stock[pid]--;
		}else{
			result = false;
			break;
		}
	}

	return result;
}