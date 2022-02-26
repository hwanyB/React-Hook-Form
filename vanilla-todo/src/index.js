const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (toDo) => {
  const li = document.createElement("li");

  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";

  if (toDo === "") {
    alert("You need to write To do!")
  } else{
    createToDo(toDo);
  }
};

form.addEventListener("submit", onSubmit);
