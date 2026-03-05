function greet(name){
    return "Hello " + name;
}

function add(a,b){
    return a + b;
}

function checkeven(num){
    if(num % 2 === 0){
        return "Even";
    }else {
        return "Odd";
    }
}
console.log( greet("Sudeep"));
console.log(add(5, 7));
console.log(checkeven(10));