import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoList.css";

function TodoList(props) {
  const { showList, filterTodos } = React.useContext(TodoContext);

  return (
    <>
      <section className={`TodoList ${showList && "TodoListOpen"}`}>
        <h1> Tareas 📅</h1>
        {filterTodos.length === 0
          ? "No se encontraron tareas .."
          : props.children}
      </section>
    </>
  );
}

export { TodoList };
