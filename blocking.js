// use fs module access syst. files
const fs = require('fs');

// read two text files and output the contents
// readFileSync is the blocking version of this code
// it needs two parameters: file to read, and encoding

// read contents of the food.txt(larger file)
let food = fs.readFileSync('food.txt', 'utf-8');
// print list to the console
console.log(food);
// print a success msg
console.log('We ate all this stuff for breakfast');

// run file to test

// now read the other file
let drinks = fs.readFileSync('drinks.txt', 'utf-8');
console.log(drinks);
console.log('We drank all this stuff for breakfast /n Success 2');


// how to start it :-
// node ..... then filename in the dotes 

// // What will the output look like? 
// The contents of food.txt
// We ate all this stuff for breakfast
// The contents of drinks.txt
// We drank all this stuff for breakfast /n Success 2

// What will the order of the outputs be?
// pizza
// sandwich
// ceviche
// spicy tenders
// hamburger
// bagel
// korean hot dog
// tacos
// pasta al pesto
// baklava
// rasmalai
// sopes
// burrita

// We ate all this stuff for breakfast
// coffee
// tea
// monster energy
// prime
// tequila
// milk

// We drank all this stuff for breakfast /n Success 2

// In this example our code executes in sequence and nothing happens until each line finishes
// Let's take a look at the non-blocking version