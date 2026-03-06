/*Arrays*/
let fruits = ["apple","banana","mango"];
console.log(fruits);
/*To access array elements (index)*/
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
/*To fond lenght of array*/
console.log(fruits.length);

/*Loop through array*/
let fruit1 = ["pineapple","grapes","berry"];
console.log(fruit1);
for(let i = 0; i < fruit1.length; i++){
    console.log(fruit1 [i]);
}

/*printing numbers using loops*/
let numbers = [10,20,30,40,50];
for(let i = 0;i < numbers.length;i++){
    console.log(numbers[i]);
}

/*push() : adds an element to end of the array*/
let num = [10,20,30];
num.push(40);
console.log(num);

/*pop() : removes the last element*/
let num1 = [80,90,30];
num1.pop();
console.log(num1);

/*Practice*/
let fruits1 = ["Watermelon","Jackfruit","Strawberry"];
fruits1.push("Greenapple");
console.log(fruits1);

let num2 = [5,10,15,20];
let sum = 0;
for(let i =0; i < num2.length; i++){
    sum = sum + num2[i];
}
console.log(sum);

let num3 = [2,4,6,8];
let sum2 = 0;
for(let i =0; i < num3.length; i++){
    sum2 = sum2 + num3[i];
}
console.log(sum2);






