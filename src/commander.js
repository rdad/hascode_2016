// {
// 	load : function(drone_id, product_quantity, product, warehouse_id) {

// 	},

// 	deliver : function(drone_id, order_id, product_quantity, product) {

// 	}
// }

(function($) {
	'use strict';

	function Commander() {
		this.commands_list = [];
	}

	Commander.prototype.load = function(drone_id, product_quantity, product, warehouse_id) {
		this.commands_list.push(
			[drone_id, 'L', warehouse_id, product, product_quantity].join(' ')
		);
	};

	Commander.prototype.deliver = function(drone_id, order_id, product_quantity, product) {
		this.commands_list.push(
			[drone_id, 'D', order_id, product, product_quantity].join(' ')
		);
	};

	Commander.prototype.build = function() {
		var out = [this.commands_list.length];
		return out.concat( this.commands_list ).join('\n');
	};

	window.Commander = Commander;

})(jQuery);
