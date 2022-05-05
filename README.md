# JavaScript30-Challenge
Accepted a challenge to build 30 things in 30 days with only Vanilla JavaScript. All my progress will be displayed here. One day - one new project!

## Day 01 - Drum Kit
When user presses a specific key on the keyboard, sound will play. Simple drum kit!

Things I learned and practiced today:
* Keyboard events ("keydown" mostly)
* Transition events (to remove activity class only when transition has ended)
* HTML data-attributes (refreshed my memory how to use it)

## Day 02 - Clock
Today I worked with Date() object. The clock I created is synchronized with user's PC clock. Also spotted a glitch, when second hand does full round, it glitches because of transition property. I handled it by using if statement, when hand is about to do full round, i remove transition to make that glitch disappear.

## Day 03 - Changing CSS variables by JS
When user is changing a specific range, the script sets this property for a image. It is possible, because of JavaScript is changing root styles in CSS, SASS / SCSS variables are converting in CSS and they are unreachable for JS. So i used here CSS variables.

Things I worked with today:
* HTML data-attributes
* CSS variables
* Array methods - applied to input:range NodeList (e.g. Array.forEach). Of course, that NodeList isn't a real array.
* ``this`` keyword provides me more flexibility in my script, but it is necessary to understand a context where this keyword is used to not get undefined

## Day 04 - Array methods
Today I got practice with array methods such as .map, .filter, .reduce, .sort. I sorted people by their last names, created a new array included only their first and last names, filtered them by their birth year, etc.
The thing I realized after today's exercises, it is that I need more of that stuff. It is very interesting thing and a bit hard for me to understand instantly.

## Day 05 - Panels Gallery
In today's project I refreshed my memory in CSS Flexbox tech. When one of slides clicked, it grows and opens all info inside of it.
What was used here:
* JavaScript classList method
* JavaScript events
* CSS Flexbox properties
* CSS Transition

## Day 06 - AJAX Filter Cities
Today I worked with asynchronous JavaScript tech called AJAX. The project's idea is to show the only cities or states those part of name user typed.
I used here:
* fetch() to get data from remote server
* Regular Expressions to handle values user typed
* Array methods as usual
* Dynamic HTML Markup with JavaScript to instantly display results on the page 

## Day 07 - Array methods (p.2)
* every() / some() methods to check is every/some value satisfies the condition
* find() method to return an element satisfies the condition
* findIndex() method to return an index of the searched element
Every task is wrapped in a function for more flexibility
