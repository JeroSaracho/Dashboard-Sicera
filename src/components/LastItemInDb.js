import React from 'react';
import LastProductInDb from './LastProductInDb';
import LastUserInDb from "./LastUserInDb"

function LastItemInDb(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProductInDb />
            {/*<!-- End content row last movie in Data Base -->*/}
            
            <LastUserInDb/>
        

        </div>
    )
}

export default LastItemInDb;