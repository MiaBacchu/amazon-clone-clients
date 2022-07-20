import React from 'react';
import {Link} from "react-router-dom"

const Cart = () => {
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: 0 </h5>
            <br />
            <p>Total: 0 </p>
            <p>Shipping: 0</p>
            <p>tax: 0</p>
            <p>Grand Total: 0</p>
            <Link to='/checkout'>
            <button className='btn-regular'>review order</button>
            </Link>
        </div>
    );
};

export default Cart;