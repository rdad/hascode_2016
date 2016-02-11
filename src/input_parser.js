/**
 * Parsed input data will look like this :

	{
		map : {
			width   : 10000,
			height   : 10000,
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

	function Parser() {
		this.data = {};

		this._dronesNumber = 0;
	}

	Parser.prototype.parseFile = function(filename, cb) {
		var that = this;
		$.get(filename, function(response) {

			var lines = response.split('\n');

			// --------------
			// Parsing algo !
			// --------------

			var map_data        = lines[0].split(' ').map(Number);
			var products_weight = lines[2].split(' ').map(Number);

			// Map properties
			that.data.map = {
				width: map_data[1],
				height: map_data[0],
				products_weight : products_weight,
				turns: map_data[3]
			};

			// Warehouses properties
			var lineStart = 3; // 3 because warehouses number always starts at line 4
			that.data.warehouses   = [];
			that._warehousesNumber = +lines[lineStart++];
			for (var i = 0, coords, items; i < that._warehousesNumber*2; i+=2) {
				coords = lines[lineStart + i].split(' ').map(Number);
				items  = lines[lineStart + i + 1].split(' ').map(Number);
					// console.log('tour ' + i, coords, items);

				that.data.warehouses.push({
					x: coords[1],
					y: coords[0],
					products_quantities: items
				});
			}

			// Orders properties
			var lineStart = 4 + (that._warehousesNumber*2);
			that.data.orders   = [];
			that._ordersNumber = +lines[lineStart++];
			for (var i = 0, delivery, nbItems, products_types; i < that._ordersNumber*3; i+=3) {
				delivery       = lines[lineStart + i].split(' ').map(Number);
				nbItems        = +lines[lineStart + i + 1];
				products_types = lines[lineStart + i + 2].split(' ').map(Number);
					// console.log('tour ' + i, delivery, nbItems, products_types);

				that.data.orders.push({
					x: delivery[1],
					y: delivery[0],
					products_ids: products_types
				});
			}

			// Drones properties
			that._dronesNumber = map_data[2];
			that.data.drones = {
				maxWeight: map_data[4],
				list : []
			};
			for (var i = 0; i < that._dronesNumber; i++) {
				that.data.drones.list.push({
					x: 0,
					y: 0,
					inventory: []
				});
			}

			// FINAL CALLBACK
			cb(that.data);
		});
	};

	window.Parser = Parser;

})(jQuery);
