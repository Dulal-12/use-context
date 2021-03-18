import React, { useContext } from 'react';
import detailContext from '../../App'
const Detail = () => {
    const cart = useContext(detailContext);
   
    return (
        <div>
            <h4>This is Detail { cart}</h4>
        </div>
    );
};

export default Detail;