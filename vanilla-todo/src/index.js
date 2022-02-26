import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = text => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = text => {
  store.dispatch(addToDo(text));
};

const dispatchDelteToDo = e => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.className = "delBtn";
    delBtn.innerText = "🗑";
    delBtn.addEventListener("click", dispatchDelteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    ul.appendChild(li);
    li.appendChild(delBtn);
  });
};

store.subscribe(paintToDos);



const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";

  if (toDo === "") {
    alert("You need to write To do!");
  } else {
    dispatchAddToDo(toDo);
  }
};

form.addEventListener("submit", onSubmit);