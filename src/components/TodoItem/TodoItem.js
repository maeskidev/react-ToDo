import React from "react";
import './TodoItem.css'

function TodoItem(props){


  return (
    <li>
      <div className={`todoItem ${props.completed && 'todoItem-complete'}`}>
        <span 
          className={`checkTodo ${props.completed && 'checkTodo-complete'}`}
          onClick={props.completeTodo}> 
          C
        </span>
        <p className={`todoItem-Text ${props.completed && 'todoItem-complete'}`}>{props.text}</p>
        <span className="deleteTodo"
          onClick={props.onDelete}> 
          x
        </span>
      </div>

    </li>
  );
}



export {TodoItem}