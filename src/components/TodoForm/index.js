import React from "react";
import { TodoContext } from "../../TodoContext";

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
      <label>...</label>
      <textarea
        placeholder="Descripcion de la tarea"
        value={newTodoValue}
        onChange={onChange}
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
