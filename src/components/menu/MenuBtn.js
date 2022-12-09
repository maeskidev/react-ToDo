import React from 'react';
import { TodoContext } from '../../TodoContext';

function MenuBtn(){

    const {showMenu, setShowMenu} = React.useContext(TodoContext)

    return (
        <div className={`btnMenu`} onClick={() => setShowMenu(!showMenu)}>
            <span className={`btnMenu-line ${showMenu && 'btn-color-black'}`}></span>
            <span className={`btnMenu-line ${showMenu && 'btn-color-black'}`}></span>
            <span className={`btnMenu-line ${showMenu && 'btn-color-black'}`}></span>
        </div>
    )

}

export {MenuBtn}

