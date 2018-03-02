
var express = require("express");
var app = express();

var http = require("http").Server(app);
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var io = require("socket.io")(http);

var port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// routes
var routes = require("./controllers/tiles_controller.js");

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('tile change', function(data){
		console.log(data);
		// TODO: validate data to prevent arbitrary data from being sent
		color = 1 * data.color + 1;
		if( color > 4 || color < 0 ) color = 0;
		// save color in db
		io.emit('tile change', {id: data.id, color: color});
	});
});

app.use("/", routes);

http.listen(port);