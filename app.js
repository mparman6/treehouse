// Problem: We need a simple way to look at a user's badge count and javascript points
// Solution: Use node.js to connect to Treehouse API to get profile infomration to to print out
var https = require("https");
var username = "mattparman";

  function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript.";
    console.log(message);
  }

// Connect to API URL (http://teamtreehouse.com/username.json)
var request = https.get("https://teamtreehouse.com/mattparman.json", function(response) {
var body = "";

// Read the data
response.on('data', function(chunk) {
  body += chunk;
});
response.on('end', function() {
  var profile = JSON.parse(body);
  printMessage(username, profile.badges.length, profile.points.JavaScript);
  
});
// Parse the data
// Print the data out

});

request.on("error", function(error) {
  console.error(error.message);
});

// var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response)














