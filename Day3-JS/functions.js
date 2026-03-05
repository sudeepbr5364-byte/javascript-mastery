/*Functions*/
/*Here we give fixed value inside the function*/
function sayHello(){
    console.log("Hello Sudeep");
}
sayHello();

function showAge(){
    console.log("I am 21 years old");
}
showAge();

/*Functions with parameters*/ 
/*Here we assign values to functions*/
function greet(name){
    console.log("Hello " + name);
}
greet("Sudeep");

function greetUser(name){
    console.log("Hello " + name);
}
greetUser("Sudeep");
greetUser("Rahul");
greetUser("Anitha");


function add(a, b){
    return a + b;
}
let result = add(5,3);
console.log(result);

function multiply(a, b){
    return a * b;
}
let answer = multiply(4, 5);
console.log(answer);

function subtract(a, b){
    return a - b;
}
let result1 = subtract(10, 4)
console.log(result1);

/*Functions with logic*/
function checkeven(number){
    if (number % 2 === 0){
        return "Even";
    }else {
        return "Odd";
    }
}
let result3 = checkeven(7);
console.log(result3);