console.log("Your index.js file is working");

$(document).ready(function(){
   console.log("Your document is ready");

   $("a").on("mouseover", function(){
    console.log("You just hovered on an h1!");
    $(this).css("background-color", "red");
   });
   $("a").on("mouseout", function(){
    console.log("You just hovered on an h1!");
    $(this).css("background-color", "white");
   });
});