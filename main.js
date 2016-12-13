console.log("Hello Friends")

// $( "button.continue" ).html( "Next Step..." ) is the same as
// document.querySelector('button.continue').innerHTML = "Next Step..."

$('h1').html('Hello, Friends')
// document.querySelector('h1').innerHTML = "Hello Friends"
// document.querySelectorAll('h1').innerHTML = "Hello Friends"
// won't work b/c it always gives you array-like structure that you have to loop through
// Advantage of jQuery is that this .html function will execute on first h1 it sees
// or ALL h1's it sees; don't have to worry about looping
// If I have TWO h1 tags:
$('h1').html('Hello, Friends')

// document.querySelector('h1')

// $('div.container').html('Hello Friends') would work but you lose the h1
// make sure you're targeting the right thing

// document ready function
// $(document).ready(function () {})

// in vanilla Javascript
// document.addEventListener('DOMContentLoaded', function () {})

// append - goes INSIDE the element and becomes a CHILD of that element
// Add foods to ul using ex: $( ".inner" ).append( "<p>Test</p>" );
var foods = ['apple', 'banana', 'carrot', 'danish', 'egg']
// to target url with jQuery and grab ALL ul's on page & do jQuery things with it:
for (var i=0; i<foods.length; i++) {
  // $('ul').append("<li>" + foods[i] + "</li>")
  $('ul').append(`<li>${foods[i]}</li>`)
}

// string templating (aka string literals):
// can run function or any code that can be evaluated
// `` anything inside tick marks is interpreted as string
// use ${} to insert data and anything inside will be interpreted as Javascript & run as Javascript
// string concatenation:
// $('ul').append(`<li>${foods[i]}</li>`)

// Goal: <div class="foods"><ul>...</ul></div>
// before and after
// The DOM always has to have perfect html.

// wrap to insert DOM things before and after
$('ul').wrap('<div class="foods">')

// don't do .css because it will put an inline style in your page
// USE CSS CLASSES if you want to manipulate the CSS in Javascript!!!
// and then change the styles that you want through the classes

// .addClass
// .hasClass is true/false
// .removeClass
// .toggleClass

// .val(Execute)
// $('input')

// to assign, it's .val & then pass it a string to change input's value
// vanilla JS: whatever.value = '123'
// this changes values of ALL input boxes
$('input').val('Hello Friends')

// to change value for just FIRST input box:
// $('input:first').val('Hello Friends')
// $('input:eq(0)').val('Hello Friends')

// // will grab all inputs that are text inputs
// $('input:text').val('Hello Friends')
// // or
// $(':text').val('Hello Friends')

// PREFERRED METHOD changing value of only the first input box
// so that "Hello Friends" doesn't display in input field AND on button:
// Traversing category (starting at one thing & going to anoher):
// like using .parent or .child to go up & down tree in CSS
$('input').first().val('Hello Friends')

// Esp LEARN THESE TWO:
// .closest()
// .find()

// listen for click event on submit button
// and when you click it, console.log value when you click submit button
// from .click on cheat sheet:
// $( "#target" ).click(function() {
//   alert( "Handler for .click() called." );
// });
$('input').last().click(function () {
  console.log($('input').first().val());
})

// creating XHR via jQuery:
// cheat sheet: AJAX - Shorthand Methods
// https://randomuser.me/API will give you single user from random place:
// https://randomuser.me/API/?nat=us to get someone in US
// the argument, data, captures the data
// $.getJSON('https://randomuser.me/API/?nat=us', function (data) {
//   console.log(data)
// })
// or to drill down further to see first name only:
$.getJSON('https://randomuser.me/API/?nat=us', function (data) {
  console.log(data.results[0].name.first)
})


// $() is jQuery selector that selects all h1 elements & changes them all to Hello
// $('h1').html(`Hello
// This would return the value of all the h1's in the html
// $('h1').html()

// this is how you would set html elements = .innerHtml
$('li').html(`Hello
  ${firstName[0].toUpperCase()}${firstName.slice(1)}
  ${lastName[0].toUpperCase()}${lastName.slice(1)}
  `)
