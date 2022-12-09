import React from "react";
import { TodoContext } from "../../TodoContext";
import './menu.css'
function Menu({children}){

    
    // const menuItems = [
    //     {icon:"🌞", text:"Para Hoy"},
    //     {icon:"🚬", text:"Cigarrillos"},
    //     {icon:"📅", text:"Tareas"},
    // ]

    const {page,changePage,showMenu} = React.useContext(TodoContext);

    const cambiar = (pagina) => {
        changePage(pagina)
    }
    return (
        <div className={`menuContainer ${!showMenu && 'hiddenMenu'}`}>

            {children[0]}

            <span className="menu-subtitles">Buscar</span>
            {children[1]}
            <span className="menu-subtitles">Categorias</span>

            {
                page.map(item => (
                    <div className={`menu-item ${item.active && 'menu-item-active'}`} key={item.icon} onClick={() => cambiar(item.text)}>
                        <span className="menu-item-icon">{item.icon}</span>
                        <span className="menu-item-text">{item.text}</span>
                    </div>
                ))
            }
        </div>
    );
}

export {Menu}