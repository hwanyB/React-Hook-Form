import React from 'react'
import { connect } from 'react-redux';
import '../routes/Home.css'
import { actionCreators } from '../store';

export function Todo({text, onDelBtnClick}) {
    
  return (
    <li>{text}
        <button onClick={onDelBtnClick} className='delBtn'>🗑</button>
    </li>
  );
}
function mapDispatchToProps(dispatch,ownProps){
    return {
        onDelBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    };
}

export default connect(null, mapDispatchToProps)(Todo);