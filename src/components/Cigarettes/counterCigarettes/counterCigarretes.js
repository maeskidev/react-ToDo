import React from 'react';
import './counterCigarettes.css'

function CounterCigarretes( props ){

    const dates = props.dates

    return (
        <div className='margin-auto position-relative'>
            <div className="cigarettes-today">
                <span className='countCigarettes'>{ dates.length }</span>
                <span className='totalDay'>/0</span>
            </div>

            <div className="cigarettes-controls">
                <button type="button" className="btn btn-minus" onClick={props.onDecrement}>🧹</button>
                <button type="button" className="btn btn-add" onClick={props.onIncrement}>🚬</button>
            </div>
        </div>
    )
}

export {CounterCigarretes}