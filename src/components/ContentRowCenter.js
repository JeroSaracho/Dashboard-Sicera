import React from 'react';
import LastItemInDb from './LastItemInDb';
import GenresInDb from './GenresInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastItemInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            {/* <GenresInDb /> */}

        </div>
    )
}

export default ContentRowCenter;