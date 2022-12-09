import React from "react";
import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../components/TodoSearch/TodoSearch";
import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";
import { CreateTodoButton } from "../components/CreateButon/CreateTodoButton";
import { Modal } from "../modal/index";
import { TodoForm } from "../components/TodoForm";
import { Menu } from "../components/menu/Menu";
import { Cigarettes } from "../components/Cigarettes/Cigarettes";
import { MenuBtn } from "../components/menu/MenuBtn";

function AppUI() {
  const value = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <Menu>
        <TodoCounter key="counter"/>
        <TodoSearch/>
      </Menu>
      
      <MenuBtn></MenuBtn>



      {
        value.page[2].active && (
          <TodoList open={value.showList}>
            {value.error && <p>Desespérate, hubo un error...</p>}
            {!value.loading && value.totalTodo === 0 && (
              <p>Crea tu primer TODO</p>
            )}
            {value.loading && <p>Estamos cargando, no desespéres...</p>}

            {value.filterTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                completeTodo={() => value.completeTodos(todo.text)}
                onDelete={() => value.deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )
      }

      {
        value.page[1].active && (
          <Cigarettes/>
        )
      }

      {value.page[2].active && (
          <CreateTodoButton setOpenModal={value.setOpenModal} />
      )}

      {value.openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

    </React.Fragment>
  );
}

export { AppUI };
