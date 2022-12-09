import React from 'react';
import { TodoContext } from '../../TodoContext';
import './createTodoButton.css'

function CreateTodoButton(props) {

    const {openModal, setOpenModal} = React.useContext(TodoContext)
    
    const onClickButton = () => {
        setOpenModal(!openModal)
    }

    return (
        <button className={`btnAdd ${openModal && 'btnAdd-open'}`}
          onClick={onClickButton}>
         +
        </button>
    );
}

export {CreateTodoButton};