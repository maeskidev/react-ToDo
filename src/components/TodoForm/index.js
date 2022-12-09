import React from "react";
import { TodoContext } from "../../TodoContext";
import "./todoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onAdd}>
      <textarea
        placeholder="Agregar tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      <button type="submit" className="btnAddTask">
        ➕
      </button>

      {/* <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
      </div> */}
    </form>
  );
}

export { TodoForm };
