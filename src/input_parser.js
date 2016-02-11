/**
 * Parsed input data will look like this :

	{
		map : {
			width   : 10000,
			height  : 10000,
			products_weight : [100, 200, 400], // Poids de chacun des produits
			turns     : 40, // Nombre de tours max
		},

		warehouses : [ 
			{
				x : 0,
				y : 0,
				products_quantities : [2, 4, 7, ...]  // Quantités des produits se trouvant dans le dépôt
			}
		],

		orders : [
			{
				x : 0,
				y : 0,
				products_ids : [2, 4, 8] // IDs des produits à délivrer
			} 
		],

		drones : {
			maxWeight : 450,
			list      : [ // Liste des drones
				{
					x : 0,
					y : 0,
					inventory : [] // Inventaire d'IDs de produits
				}
			]
		}
	}

 */

(function($) {
	'use strict';

	var parser = function() {
		
	}

	$.get('../dump/example_dump.in', function(result) {
		console.log(result)
	});

	window. = parser;

})(jQuery);
