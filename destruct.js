//##############################################
// 2. Destructuring
// - putting each element of the array into a separate variable
//##############################################

// ES5
var john = ['John', 25, 'New York'];
var name = john[0];
var age = john[1];
var place = john[2];


// ES6
const [name2, age2, place2] = ['Tom', 33, 'Scotland'];
console.log(name2, age2, place2);
console.log(`${name2} is ${age2} and he is from ${place2}`);


const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(`${firstName} ${lastName}`);

// setting different names than variable names to key names 
const {firstName: obj1name, lastName: obj1surname} = obj;
console.log(`${obj1name} ${obj1surname}`);



//Es6 destructing from a function
function clacAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [newAge, newRetirement] = clacAgeRetirement(2000);
console.log(newAge);
console.log(newRetirement);


// ####################################################
// 2. destructing objects example
//
// ####################################################

//Es5
const user = { 
    name: 'John Doe', 
    age: 34 
};

const name = user.name; // name = 'John Doe'
const age = user.age; // age = 34

//ES6 - destructing syntax
// const { name2, age2 } = user;
// name2 = 'John Doe', age2 = 34


// ####################################################
// 3. destructing array example
//
// ####################################################

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

const [a2, b2,,, c2] = [1, 2, 3, 4, 5, 6];
console.log(a2, b2, c2); // 1, 2, 5


//swap values of varaibles
let a3 = 8, b3 = 6;
 [a3, b3] = [b3, a3]
 console.log('[a3, b3] = [b3, a3] :', [a3, b3] = [b3, a3]);