import React from 'react';
import './calendarCigarettes.css'

function CalendarCigarettes(props) {

    // const obj = {
    //     key1: 'value1',
    //     key2: 'value2',
    //     key3: 'value3'
    //   };
      
    //   const objKeys = Object.keys(obj);
      
    //   return (
    //     <div>
    //       {objKeys.map(key => (
    //         <p>{key}: {obj[key]}</p>
    //       ))}
    //     </div>
    //   );
      

    // console.log(props);
    const objetoFechas = props.dias
    // console.log(objetoFechas);
    // const listaItems = cigarsbydia.map((e) => <p>{e}</p>)
    const objetoKeys = Object.keys(objetoFechas)

   
    return (
        <>

            <div className="cigarettes-stats">
                <h2>Estadisticas</h2>
                <table className='tableCigarettes'>
                    <thead className='tableHead'>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Dia</th>
                            <th scope="col">Cantidad</th>
                        </tr>
                    </thead>
                    <tbody className='tableBody'>
                                                      
                        
                        {
                            objetoKeys.map(key => (
                                <tr> 
                                    <th scope='row'> </th>
                                    <td>{key} </td> 
                                    <td>{objetoFechas[key]}</td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>

        </>
    )
}

export { CalendarCigarettes }