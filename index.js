//$("h1").text("Bye");
$("button").text("Click me");//add/change textin tag
//$("button").html("<em>Don't click me</em>");add/change html tag works as innerHTML in vanila JS

//$("a").attr("href", "http://www.yahoo.com"); attribute manipulation -changing value of an attribute or add attribute to html element is done by the same way

//returns all classes which affect the selected tag
console.log($("h1").attr("class"));

//returns the source of img
console.log($("img").attr("src"));

//EVENT LISTENERS
// $("h1").click(function() {
//     $("h1").css("color", "purple");
// }); -->To <h1>

// $("button").click(function() {
//     $("h1").css("color", "purple");
// });--> TO all buttons

// $("input").keypress(function(event) {
//     console.log(event.key);
// }) --> Keeps lot on any button pressed and shows it to the Console

// $(document).keypress(function(event) {
//     $("h1").text(event.key)
// }) --> displays the pressed key in the <h1>

// .on("eventListener",callbackfunction)- it takes 2 parameters -1)event listener 2)callback function to happen on that event
//Example:
// $("h1").on("mouseover", function() {
//     $("h1").css("color", "black");
// }); --> on hovering over our <h1> it will change the color 

//All the list of events we can use with .on() can be found at:
// https://www.w3schools.com/jsref/dom_obj_event.asp

//Add and Remove of elements with jQuery
//We can ADD before OR after some element another one using:
// .before("nameof the EL we want to add")
// .after("nameof the EL we want to add")
//Example:
$("h1").before("<button>Button Before Hello</button>");
$("h1").after("<button>Button After Hello</button>");

//We can Add element just after the oppening tag of the selected element using .prepent() or just before the closing tag using .appent():
// .prepent("nameof the EL we want to add")
// .append("nameof the EL we want to add")
//Example:
$("h1").prepend("<button>Button Prepended to Hello</button>");
$("h1").append("<button>Button Appended to Hello</button>");

//.remove() removes the selected element or elements
// $("h1").remove();

// $("h1").hide(); --> Hides the selected element.
// $("h1").show(); --> Shows the selected element.

// .toggle() will (свива и разгъва) suddenly show and hide the selected element. In our case always when we click some button on the page it will activate .toggle()
// $("button").click(function () {
//     $("h1").toggle();
// })

//.fadeOut() wil make an elemnt to disapear by more pleasent way
//fadeIn() makes faded Out element to show up.
//Example .fadeOut():
// $("button").click(function () {
//     $("h1").fadeOut();
// })
//Example .fadeIn():
// $("button").click(function () {
//     $("h1").fadeIn();
// })
//Example .fadeToggle() works as .toggle() but more nicely way 
// $("button").click(function () {
//     $("h1").fadeToggle();
// });

//.slideUp() , .slideDown() and .slideToggle() съответно сгъват нагоре и надолу селектирания елемент .slideToggle() прави и двете
// $("button").click(function () {
//     $("h1").slideToggle();
// })

//.animate({some css here...}) ни позволява да използваме наш css който да се изпълни при определени условия върху селектирания елемент
//работи само с CSS пропъртита които имат числа за стойности(margin,width,opacity...) ако използваме %, rem.. те заедно с числата трябва да са в кавички "20%","10rem"...
// $("button").click(function () {
//     $("h1").animate({opacity: 0.5});
// }) --> will made the selected item and its sub items more transperant when click on some button

//those methods can be chained
$("button").click(function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

//all methods here: https://www.w3schools.com/jquery/jquery_ref_effects.asp