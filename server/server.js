var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: 'R3EX5eWab1OHfSeMIjypqQPlx',
  consumer_secret: '2ppCi0aX0Tt1mcebvYaehQzxn2vSmOiK2PRgZTKyikxobdcGeG'
,
  access_token_key: '716335975035604992-wyPrasPiFcWoqMAz0tzE0R1XDgRU2cH',
  access_token_secret: 'dPjA3XHZblawpuTYsP4rvOzZxxbgn8Yp9PTpX36Xzhttr'
,
});

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// make a get request to twitter
  // send response

function getUserTweets(params, res) {
	client.get('statuses/user_timeline', params, function(error, tweets) {
    if (!error) {
    	console.log('tweets are', tweets)
      res.send(tweets);
    }
});
};

  app.get('/', function(req, res) {
  	console.log('req.query is',req.query);
  	getUserTweets(req.query, res);
  });



var port = 3000;
var server = app.listen(port, function() {
	console.log("Server listening on: http://localhost:" + port);
});