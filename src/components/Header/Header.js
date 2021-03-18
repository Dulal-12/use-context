import React, { useContext } from 'react';
import { detailContext } from '../../App';

const Header = () => {
 const [cart,setCart] =  useContext(detailContext);
    return (
        <div>
            <h4>This is Header : {cart}</h4>
            <button onClick={()=>setCart(cart+1)}>Increment</button>
        </div>
    );
};

export default Header;