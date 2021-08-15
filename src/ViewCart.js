import React from 'react';
import Cart from './Cart';
import { CartProvider } from "react-use-cart";
import {Link} from 'react-router-dom';

const ViewCart = () => {
    return (
        <div>
            <div className="text-center" style={{paddingTop:"20px"}}>
                <button className="btn btn-primary">
                    <Link to="/">Go back to Menu</Link>
                    </button>
            </div>
            <CartProvider>
            <Cart/>
            </CartProvider>
        </div>
    )
}

export default ViewCart
