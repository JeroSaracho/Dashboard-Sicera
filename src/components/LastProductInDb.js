import React from 'react';
import { useState, useEffect } from 'react';

function LastProductInDb(){

    const [isLoading, setIsLoading] = useState(true);
    const [lastProduct, setLastProduct] = useState(null);

    const endPointProducts = "http://localhost:3000/products/api/sidras"

    useEffect(() => {
        fetch(endPointProducts)
        .then((response) => response.json())
        .then((lastProduct) => {
            setLastProduct(lastProduct.response.data.pop());
            setIsLoading(false);
            
        });
    }, [isLoading]);
 

    
    
    if (isLoading) {
        return (
        <div className="App">
            <h1>Cargando...</h1>
        </div>
        );
    }else {

        return(
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto en la base de datos</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 +'rem'}} alt="" src={lastProduct.pathImg}/>
                        </div>
                        <h1>{lastProduct.name}</h1>
                        <p>{lastProduct.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>
        )

    }

    
    
}

export default LastProductInDb;
