import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../routes/Home.css";
import { actionCreators } from "../store";

export function Todo({ text, onDelBtnClick, id }) {
  return (
    <li>
      <Link className='Link' to={`/${id}`}>
        <p>{text}</p>
      </Link>
      <button onClick={onDelBtnClick} className='delBtn'>
        🗑
      </button>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDelBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(Todo);
