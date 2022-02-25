const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

let count = 0;
num.innerText = count;


function updateText(){
  num.innerText = count;
}

function handleAdd(){
  count = count + 1;
  updateText();
}
function handleMinus(){
  count -= 1;
  updateText();
}


add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);