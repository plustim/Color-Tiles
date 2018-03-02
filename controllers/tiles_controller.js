var express = require("express");

// Create the router for the app
var router = express.Router();

var tiles = require("../models/tiles.js");

// send the page html
router.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "../public/index.html"));
})

// get all the tiles
router.get("/api/list", function(req, res) {
	tiles.all(function(err, results) {
		res.json(results);
	});
});

// toggle tile
router.put("/api/flip", function(req, res){
	tiles.flip(req.body.id, req.body.color, function(err, results){
		res.json(results);
	})
});

// Export routes for server.js to use.
module.exports = router;