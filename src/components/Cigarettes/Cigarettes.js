import React from "react";
import './cigarettes.css'

function Cigarettes() {
    return (
        <section className={'cigarettesContainer'}>
            <h1 className="title">Cigarrillos 🚬</h1>
            <div className="cigarettes-grid">
                <span className="cigarettes-today">2/3</span>
                <div className="cigarettes-controls">
                    <button type="button" className="btn btn-minus">restar</button>
                    <button type="button" className="btn btn-add">Acabe de fumar 🚬</button>
                </div>
                <div className="cigarettes-stats">
                    <span>En una semana has fumado 52 cigarrillos, esta semna deberas fumar 51</span>
                </div>
            </div>
        </section>
    )
}


export {Cigarettes}