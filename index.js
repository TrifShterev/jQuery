//$("h1").text("Bye");
$("button").text("Don't click me");//add/change textin tag
//$("button").html("<em>Don't click me</em>");add/change html tag works as innerHTML in vanila JS

//$("a").attr("href", "http://www.yahoo.com"); attribute manipulation -changing value of an attribute or add attribute to html element is done by the same way

//returns all classes which affect the selected tag
console.log($("h1").attr("class"));

//returns the source of img
console.log($("img").attr("src"));

//Event listeners
$("h1").click(function() {
    $("h1").css("color", "purple");
});