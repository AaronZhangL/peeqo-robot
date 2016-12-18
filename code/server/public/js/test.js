$(document).ready(function(){


	var socket_url = window.socketURL

	var socket = io(socket_url + '/controlpanel')

	socket.on("peeqoIp", function(msg){
		alert("Peeqo IP: " + msg);
	} )

	/// FINAL LIST ///

	$("body").on("submit","#animate", function(event){
		event.preventDefault()

		var obj = {
			gif_type: $("#gif-type").find(":selected").text() || null,
			gif_category: $("#gif-category").val() || null,
			gif_url: $("#gif-url").val() || null,
			gif_loop_forever: $("#gif-loop").is(":checked"),
			servo:$("#servo").val() || null,
			led:$("#led").val() || null,
			sound:$("#sound").val() || null,
			sound_loop_forever: $("#sound-loop").is(":checked")
		}

		console.log(obj)

		socket.emit("animate",obj)
		
	})

	$("body").on("click","#getIp", function(e){
		e.preventDefault();
		socket.emit("getIp","yes")
	})



})