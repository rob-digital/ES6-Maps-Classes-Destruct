// ####################################################
// 1. Spread Operator
// it extraxts an array into its components
// ####################################################

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(12, 18, 30, 43);
console.log('sum1:', sum1);

//ES5
var ages = [12, 18, 30, 43];
var sum2 = addFourAges.apply(null, ages);
console.log('sum2:', sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log('sum3:', sum3);

//~~~~~~~~~~~~~
const familySmith = ['John', 'Mark', 'Sam'];
const familyMiller = ['Tom', 'Pat', 'Mat'];

const bigFamily = [...familySmith, ...familyMiller];
console.log('bigFamily:', bigFamily);

//~~~~~~~~~~~~~~~~
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const allText = [h, ...boxes];
console.log('allText:', allText);
Array.from(allText).forEach(cur => cur.style.color = 'darkgrey') ;