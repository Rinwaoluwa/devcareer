// let firstName = "rinwaoluwa";

// console.log(firstName);

// //  TYPEOF KEYWORD
// console.log(typeof firstName)

// console.log(typeof true)
// console.log(typeof 'rinwaoluwa')
// console.log(typeof 4)

// // ---------------- DYNAMIC TYPING

// // let lastName = 'odejobi';
// console.log(lastName)

// lastName = 98;
// console.log(lastName);


// let _lastName = 'mary';

// let $lastName = 'shola';


// //  --------------DECLARING VARIABLES 

// //  LET
// let birthYear = 1909;
// console.log(birthYear);

// birthYear = 2003;
// console.log(birthYear);

// //  CONST
// const  _birthYear = 2003;
// // _birthYear = 2015;
// console.log(_birthYear)

// // WORKS LIKE LET KEY WORD EXCEPT THAT IT IS HOISTED ---- MORE ON THAT MOVING FORWARD IN JAVASCRIPT

// //  VAR 
// // var $bithYear = 2003;

// // console.log($bithYear)

// $bithYear = 2004;

// console.log($bithYear)

// ------------------BASIC OPERATORS 
// console.log(' BASIC OPERATORS')
// //  mathematical operator

// const ageTobi = 2037 - 1991;

// console.log(ageTobi);

// const now = 2047;

// const ageAda = now - 2018;

// console.log(ageAda);


// console.log(ageAda * 2, ageTobi / 10);


// //  PLUS OPERATOR 

// const firstName = 'John'

// const lastName = 'Doe'
// 7
// console.log(firstName + lastName)

// // if you wanted space in between the names

// console.log(firstName + ' ' + lastName)


// //  ASSIGNMENT OPERATOR
// console.log(' ASSIGNMENT OPERATOR')
// let x = 10 + 5;

// console.log(x);  // x = 15

// x+= 5 // shorter way of writing x = x + 5 ---- x in this case is 20;

// console.log(x)

// //  increment by 1
// x++
// console.log(x) // x = x - 1;

// // decrement by 1
// x-- 
// console.log(x)


// //  COMPARISM OPERATOR 
// console.log(' COMPARISM OPERATOR')

// const ageToby = 40;

// const ageFemi = 50;

// console.log(ageTobi > ageFemi)

// console.log(ageToby <= ageFemi)


// // storing the value of the operation in avariable 
// const olderPerson =  ageTobi > ageFemi

// console.log(olderPerson)

// OPERATOR PRECEEDENCE

console.log(' OPERATOR PRECEDENCE ');

console.log(4 * 3 ** 2); // 4 * 9;
// Expected output: 36;  

console.log((4 * 3) ** 2) // 144

let x, y;

console.log(x, y);

x = y = 3 + 4 * 5; // 3 + 20 --- the * opereation is carried out first
// expected output: 23

//x = y = 3 + 4 * 5; simply put is saying y = 3 + 4 * 5 then x = y;
console.log(x, y)


