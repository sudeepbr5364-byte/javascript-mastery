/*to get the largest number in the array*/
let numbers = [10,43,70,110,21];
let largest = numbers[0];
for(let i = 0;i < numbers.length;i++){
    if( numbers[i] > largest){
        largest = numbers[i];
    }
}
console.log("Largest Number is:",largest);