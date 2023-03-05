import React from 'react';
import { useState, useEffect } from 'react';

function LastUserInDb(){

    const [isLoading, setIsLoading] = useState(true);
    const [lastUser, setLastUser] = useState(null);

    const endPointUsers = "http://localhost:3000/users/api/allusers"

    useEffect(() => {
        fetch(endPointUsers)
        .then((response) => response.json())
        .then((lastUser) => {
            setLastUser(lastUser.response.data.pop());
            
            setIsLoading(false)
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
                        <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado en la base de datos</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:  23.3 +'rem'}} alt="" src={lastUser.pathImg}/>
                        </div>
                        <h1>{lastUser.first_name} { lastUser.last_name}</h1>
                        <p>{lastUser.email}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                    </div>
                </div>
            </div>
        )

    }

    
    
}

export default LastUserInDb;
