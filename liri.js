// liri.js
// code used to grab data from keys.js
var appKeys = require("./keys.js");
var keys = appKeys;

// var userRequest = process.argv[3];

// liri commands
function liri(){
// my tweets 
    if (process.argv[2] === 'my-tweets'){
        var Twitter = require('twitter')
        var client = new Twitter({
            consumer_key: keys.consumer_key,
            consumer_secret: keys.consumer_secret,
            access_token_key: keys.access_token_key,
            access_token_secret: keys.access_token_secret
          });
           
          var params = {screen_name: '_rezaca', count:'10'};
          client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
              tweets.forEach(function(tweet) {
                console.log("The following tweet was created on " + tweet.created_at + ": " + tweet.text)
              });
            }
          });
    }
// spotify-this-songs
// spotify client id: a2e1756ea77841c29579ac36110c5e9d
// spotify client secret: 7cce47d402f04776b20398e10b019ca0
    else if (process.argv[2] === 'spotify-this-song'){
        var Spotify = require('node-spotify-api');
        var userRequest = process.argv[3];
        
        var spotify = new Spotify({
         id: 'a2e1756ea77841c29579ac36110c5e9d',
         secret:'7cce47d402f04776b20398e10b019ca0'
       });
        
       spotify
       .request("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist")
       .then(function(data) {
         console.log(data.items); 
       })
       .catch(function(err) {
         console.error('Error occurred: ' + err); 
       });
    }
// movie-this
// omdb api: 40e9cece 
    else if (process.argv[2] === 'movie-this'){
        var request = require("request");
        var userRequest = process.argv[3];
        
        // Then run a request to the OMDB API with the movie specified
        request("http://www.omdbapi.com/?t=" + userRequest + "&type=movie&apikey=40e9cece", function(error, response, body) {
        
          // If the request is successful (i.e. if the response status code is 200)
          if (!error && response.statusCode === 200) {
        
            // Parse the body of the site and recover just the imdbRating
            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            console.log("The movie's title is: " + JSON.parse(body).Title);
            console.log("The movie was made in the year: " + JSON.parse(body).Year);
            console.log("The movie's IMdB rating is: " + JSON.parse(body).imdbRating);
            console.log("The movie's Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value);
            console.log("The movie was produced in: " + JSON.parse(body).Country);
            console.log("The movie's spoken languages are: " + JSON.parse(body).Language);
            console.log("The movie's plot is: " + JSON.parse(body).Plot);
            console.log("The movie's actors are: " + JSON.parse(body).Actors);
          }
        });
    }
// do what it says
    else if (process.arv[2] === 'do-what-it-says'){

    }
};

liri();