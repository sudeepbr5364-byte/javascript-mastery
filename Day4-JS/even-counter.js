/* to count total number os even numbers in array*/
let numbers= [4, 8, 2, 6, 10];
let count = 0
for(let i = 0; i < numbers.length; i++){
    if( numbers[i] % 2 === 0){
        count++; 
    }
}
console.log(count);
