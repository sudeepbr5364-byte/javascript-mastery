function checktype(num){
    if(num > 0){
        return "Positive";
    }
    else if(num < 0){
        return "Negative";
    }
    else{
        return "Zero"
    }
}
const checkEvenOdd = (num) => {
    if( num % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
const MultiplyBy2 = (num) => num * 2;
let numbers= [10,-5,0,7];
for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
console.log("Number: "+num);
console.log("Type: "+checktype(num));
console.log("Even/Odd: "+checkEvenOdd(num));
console.log("MultiplyBy2: "+MultiplyBy2(num));
console.log("--------------------------");
}

