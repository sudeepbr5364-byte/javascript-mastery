function showName(){
    let name=document.getElementById("nameInput").value;
    document.getElementById("output").innerText = `Hello ${name} `;
    if(name === ""){
        document.getElementById("output").innerText = "Please Enter Your Name";
    }
}
function showSquare(){
    let number = document.getElementById("showNumber").value;
    let square = number * number;
    document.getElementById("squareOutput").innerText = `The Square of ${number} is ${square}`;
    if(number === ""){
        document.getElementById("squareOutput").innerText = "Please Enter a Number";
    }
}