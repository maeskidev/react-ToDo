import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoList.css'

function TodoList(props){

  const {showList,filterTodos}= React.useContext(TodoContext)
  function showTasks(){
    const todoListToggle = document.querySelector("#headerTodoList"); 
    const todoList = document.querySelector(".TodoList");

    //desplaza la lista hacia arriba
    todoList.classList.toggle("TodoListOpen")
    //cambia el tamaño de de la sona sensible para cerrar la lista

    todoListToggle.classList.toggle("TodoListToggleOpen")

  }


  return (
    <>
      <section className={`TodoList ${showList && 'TodoListOpen'}`}>
          <div className={`TodoListToggleClose`}  id="headerTodoList"
            onClick={showTasks}>
          </div>

          {filterTodos.length === 0?"No se encontraron tareas ..": props.children}

      </section>

    </>
  );
}

export {TodoList}