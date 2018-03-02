var orm = require("../config/orm.js");

var tiles = {

	// get all tiles
	all: function(cb){
		orm.selectAll("tiles", cb);
	},
	
	// flip a tile
	flip: function(id, color, cb){
		orm.updateOne("tiles", "id", id, "color", color, cb)
	},
};

module.exports = tiles;