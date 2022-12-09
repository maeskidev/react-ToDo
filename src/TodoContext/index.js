import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodo = todos.length;
  let showList = false;
  let filterTodos = [];

  const [openModal, setOpenModal] = React.useState(false);
  const [showMenu, setShowMenu] = React.useState(true);

  if (searchValue.length < 1) {
    filterTodos = todos;
    showList = false;
  } else {
    console.log("else");
    filterTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    showList = true;
  }

  const completeTodos = (text) => {
    let todoPosition = todos.findIndex((todo) => todo.text === text);
    let auxTodos = [...todos];

    auxTodos[todoPosition].completed = !auxTodos[todoPosition].completed;
    saveTodos(auxTodos);
  };

  const deleteTodo = (text) => {
    let todoPosition = todos.findIndex((todo) => todo.text === text);
    let auxTodos = [...todos];

    auxTodos.splice(todoPosition, 1);
    saveTodos(auxTodos);
  };

  const addTodo = (text) => {
    let auxTodos = [...todos];

    auxTodos.push({
      completed: false,
      text,
    });
    saveTodos(auxTodos);
  };

  let menuItems = [
    {icon:"🌞", text:"Para Hoy", active:false},
    {icon:"🚬", text:"Cigarrillos", active:false},
    {icon:"📅", text:"Tareas", active:true},
]
  const [page, setPage] = React.useState(menuItems)

  const changePage = (page) => {
    let auxPages = [...menuItems]
    let pos = auxPages.findIndex(x => x.text === page);
    for (let index = 0; index < auxPages.length; index++) {
      const element = auxPages[index];
      if(index === pos ){
        element.active = true;
      }else{
        element.active = false;
      }
    }
    setPage(auxPages)
    // console.log(page)
  }
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodo,
        completedTodos,
        searchValue,
        setSearchValue,
        filterTodos,
        completeTodos,
        deleteTodo,
        addTodo,
        showList,
        openModal,
        setOpenModal,
        page,
        changePage,
        showMenu,
        setShowMenu
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

// <TodoContext.Consumer></TodoContext.Consumer>
