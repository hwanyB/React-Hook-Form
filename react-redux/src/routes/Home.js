import React, { useState } from "react";
import { connect } from "react-redux";
import "./Home.css";
import { actionCreators } from "../store";
import Todo from "../components/Todo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("you");
    } else {
      addToDo(text);
      setText("");
    }
  };

  return (
    <main>
      <div>
        <h1>TO DOS</h1>
        <form onSubmit={onSubmit}>
          <input
            value={text}
            onChange={onChange}
            autoFocus
            type='text'
            placeholder='Write To Do!'
          />
          <button className='addBtn'>ADD</button>
        </form>
        <ul>
          {toDos.map((toDo) => (
            <Todo key={toDo.id} {...toDo} />
          ))}
        </ul>
      </div>
    </main>
  );
}
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
