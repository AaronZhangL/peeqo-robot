$(document).ready(function(){

	console.log("hello");

	var socket_url = window.socketURL

	var socket = io(socket_url + '/controlpanel')

	socket.on("peeqoIp", function(msg){
		alert("Peeqo IP: " + msg);
	} )

	/// FINAL LIST ///

	$("body").on("click","#listen", function(e){
		e.preventDefault();
		socket.emit("listen","yes")
	})

	$("body").on("click","#sayHi", function(e){
		e.preventDefault();
		socket.emit("sayHi","yes")
	})

	$("body").on("click","#sayBye", function(e){
		e.preventDefault();
		socket.emit("sayBye","yes")
	})

	$("body").on("click","#takePicture", function(e){
		e.preventDefault();
		socket.emit("takePicture","yes")
	})

	$("body").on("click","#playMusic", function(e){
		e.preventDefault();
		socket.emit("playMusic","yes")
	})

	$("body").on("click","#activateMusic", function(e){
		e.preventDefault();
		socket.emit("activateMusic","yes")
	})

	$("body").on("click","#stopMusic", function(e){
		e.preventDefault();
		socket.emit("stopMusic","yes")
	})

	$("body").on("click","#blockFacebook", function(e){
		e.preventDefault();
		socket.emit("blockFacebook","yes")
	})

	$("body").on("click","#blockTwitter", function(e){
		e.preventDefault();
		socket.emit("blockTwitter","yes")
	})

	$("body").on("click","#lightsOn", function(e){
		e.preventDefault();
		socket.emit("lightsOn","yes")
	})

	$("body").on("click","#lightsOff", function(e){
		e.preventDefault();
		socket.emit("lightsOff","yes")
	})



	$("body").on("click","#startBle", function(e){
		e.preventDefault();
		socket.emit("startBle","yes")
	})

	$("body").on("click","#showExpressions", function(e){
		e.preventDefault();
		socket.emit("showExpressions","yes")
	})

	$("body").on("click","#move", function(e){
		e.preventDefault();
		socket.emit("move","yes")
	})

	

	$("body").on("click","#idle", function(e){
		e.preventDefault();
		socket.emit("idle","yes")
	})

	$("body").on("click","#stopIdle", function(e){
		e.preventDefault();
		socket.emit("stopIdle","yes")
	})

	$("body").on("click","#moveCurious", function(e){
		e.preventDefault();
		socket.emit("moveCurious","yes")
	})

	$("body").on("click","#moveHappy", function(e){
		e.preventDefault();
		socket.emit("moveHappy","yes")
	})

	$("body").on("click","#moveSad", function(e){
		e.preventDefault();
		socket.emit("moveSad","yes")
	})

	$("body").on("click","#moveNo", function(e){
		e.preventDefault();
		socket.emit("moveNo","yes")
	})

	$("body").on("click","#moveAlert", function(e){
		e.preventDefault();
		socket.emit("moveAlert","yes")
	})

	$("body").on("click","#moveReset", function(e){
		e.preventDefault();
		socket.emit("moveReset","yes")
	})

	$("body").on("click","#ledFade", function(e){
		e.preventDefault();
		socket.emit("ledFade","yes")
	})

	$("body").on("click","#ledAlert", function(e){
		e.preventDefault();
		socket.emit("ledAlert","yes")
	}) 

	$("body").on("click","#ledError", function(e){
		e.preventDefault();
		socket.emit("ledError","yes")
	})

	$("body").on("click","#ledIdle", function(e){
		e.preventDefault();
		socket.emit("ledIdle","yes")
	})

	$("body").on("click","#getIp", function(e){
		e.preventDefault();
		socket.emit("getIp","yes")
	})



})