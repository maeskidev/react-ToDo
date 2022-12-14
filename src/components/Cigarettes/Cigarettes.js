import React from "react";
import './cigarettes.css'
import { CounterCigarretes } from "./counterCigarettes/counterCigarretes";
import { CalendarCigarettes } from "./calendarCigarettes/CalendarCigarettes";
import { useLocalStorage } from "../../TodoContext/useLocalStorage";

function Cigarettes() {

    const fechaHoy = new Date().toLocaleDateString("es-us",{ weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' });

    // const [dates, setDates] = React.useState([])

    const {item:dates, saveItem:setDates,} = useLocalStorage('cigarrillos_v1',[]) 
    

     // Definir la función onIncrement para incrementar el contador.
    const onIncrement = () => {
        // Convierte el timestamp en una cadena de texto con la fecha en un formato legible para humanos
        const date = new Date().toLocaleDateString("es-us",{ weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'});
        // Agrega la fecha a la lista de fechas
        if(dates[dates.length-1] !== date){
            console.log("ees diferente");
        }
        setDates([...dates, date])
    };

    // Definir la funcion onDecrement para decrementar el contador
    const onDecrement = () => { 

        if(dates.length > 0){
            let datesAux = [...dates];
            datesAux.pop()
            setDates(datesAux);
        }
    };


    

    function contarDias () {
        // Crea un objeto vacío que se usará para llevar un registro de las fechas y sus contadores
        const contadores = {};

        // Itera sobre cada elemento de la lista de fechas
        dates.forEach(fecha => {
        // Si la fecha ya existe en el objeto de contadores, aumenta su contador en uno
        if (contadores[fecha]) {
            contadores[fecha]++;
        } else {
            // Si la fecha no existe en el objeto de contadores, agrega un nuevo elemento con un contador inicializado en 1
            contadores[fecha] = 1;
        }
        });

        // Imprime el objeto de contadores para ver cuántas veces aparece cada fecha
        // console.log(contadores);

        return contadores

    }

    const dias = contarDias()


    return (
        <section className={'cigarettesContainer'}>
            
            <div>
                <h1 className="titleCigarettes">Cigarrillos</h1>
                <span className="d-flex justify-content-center">{fechaHoy}</span>
            </div>
            
                
            <CounterCigarretes 
                dates={dates} 
                onIncrement={onIncrement}
                onDecrement={onDecrement}
            />

            <CalendarCigarettes
                dias={dias}
                contarDias={contarDias}
            />

        </section>
    )
}


export {Cigarettes}