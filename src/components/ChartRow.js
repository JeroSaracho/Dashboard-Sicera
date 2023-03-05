import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>{props.rating}</td>
                    <td>{props.country}</td>
                    <td>{props.brand}</td>
                    <td>{props.cellar}</td>
                </tr>
            )
    }
    
        

export default ChartRow;