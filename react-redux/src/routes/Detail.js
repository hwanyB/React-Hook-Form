import React from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

export function Detail({ toDo }) {
  const myId = useParams().id;
  const findToDo = toDo.find(toDo => toDo.id === parseInt(myId));

  const date = new Date(findToDo?.id).toString();
  console.log(date);
  return (
    <div>
      <h1>{findToDo?.text}</h1>
      <h5>Created At : {date}</h5>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return { toDo: state }
}
export default connect(mapStateToProps)(Detail);