/*Arrow functions(Modern Way)*/
const multiply = (a,b) => {
    return a * b;
};
console.log(multiply(5,3));

/*Short Arrow Funtion*/
const multiply1 = (a,b) => a * b;
console.log(multiply(5,3));

/* Arrow function using map()*/
let numbers = [1,2,3,4];
let doubled = numbers.map (num => num * 2);
console.log(doubled);

let numbers1 = [2,4,6];
let multiplyby3 = numbers1.map(num => num * 3);
console.log(multiplyby3);

/* Arrow function using filter()*/
let numbers3 = [10,15,20,25,30];
let result = numbers3.filter(num => num > 20);
console.log(result);

let marks = [45,60,72,30,90];
let result1 = marks.filter( num => num > 50);
console.log(result1);

/*Combine filter() and map() with arrow functions*/
let numbers4 = [1,2,3,4,5,6];
let result2 = numbers4
.filter(num => num % 2 === 0)
.map(num => num * 10);
console.log(result2);

let ages = [12,18,20,15,30];
let result4 = ages
.filter(num => num >= 18)
.map(num => num * 2);
console.log(result4);