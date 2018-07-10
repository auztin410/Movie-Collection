var fs = require("fs");
var addMovie = $("#addThisMovie");

$("#addMovie").on("click", function (event) {
event.preventDefault();
fs.appendFile("movieCollection.txt", addMovie + ", ", function(err) {
if(err) {
    console.log(err);
}
else{
    console.log("Movie Added Successfully")
}
});
$("#addMovieForm").reset();
});