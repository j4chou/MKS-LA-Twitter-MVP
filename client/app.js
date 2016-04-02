//make a get request to local server
var app = {

  init: function() {
    console.log("inside init");
    $('#send').on('submit', app.handleSubmit);
    $('#send').val('');
  },

  handleSubmit: function() {
  	var username = { screen_name: $('#message').val() , count: 25 }; 
  	app.fetchTweets(username);
  },

  fetchTweets: function(username) {
  	//on sucess, call get tweets
  	console.log("inside fetch");
    event.preventDefault();

  	$.ajax({
  		type: "GET",
  		url: "http://127.0.0.1:3000",
  		'content-type':'application/json', 
  		data: username,
  		success: function(data) {
  			console.log("inside fetch success");
  			console.log(data);
  			data.forEach(function(obj) {
          $('#tweets').append(
          	'<div>' + obj.text + '</div>'
          	);
  			});
  		},
  		error: function() {
  			console.log("Invalid username");
  		}
  	})
  }



};