import React from 'react';
import ChartRow from './ChartRow';
import { useState, useEffect } from 'react';

function Chart (){

    const [tableRowsData, setTableRowsData] = useState([]);
    const endPointProducts = "http://localhost:3000/products/api/sidras"


    useEffect(()=> {
        
        fetch(endPointProducts)
        .then(res => res.json())
        .then(dataProducts => {
            
            setTableRowsData(dataProducts.response.data)
            
        })
        .catch(err => console.log(err))

    }, [])
    console.log(tableRowsData);




    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Rating</th>
                                <th>País</th>
                                <th>Marca</th>
                                <th>Bodega</th>
                            </tr>
                        </thead>
                        <tfoot>
                        <tr>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Rating</th>
                                <th>País</th>
                                <th>Marca</th>
                                <th>Bodega</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;