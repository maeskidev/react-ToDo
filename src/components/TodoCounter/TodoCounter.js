import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {totalTodo, completedTodos} = React.useContext(TodoContext)
    return (
        <h2 className='TodoCounterTitle'>Tareas completas {completedTodos} de {totalTodo}</h2>
    );
}

export { TodoCounter };