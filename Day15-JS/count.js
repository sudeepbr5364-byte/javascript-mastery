let count = 0;

function increase() {
  count++;
  document.getElementById("count").innerText = count;
}

function decrease() {
  if(count > 0){
    count--;
  }
  document.getElementById("count").innerText = count;
}